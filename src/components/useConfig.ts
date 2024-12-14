import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Config } from "../types";

const RPM_MULTIPLIER = 2;
const SPEED_MULTIPLIER = 0.05;

function useConfig() {
  const socketUrl = "ws://192.168.125.207:80/ws";
  const { readyState, lastMessage } = useWebSocket(socketUrl);
  const [isLoading, setIsLoading] = useState(false);

  const [config, setConfig] = useState<Config>({
    speed: 0,
    rpm: 0,
    indicatorLeft: false,
    indicatorRight: false,
    abs: true,
    service: false,
    highBeam: false,
    neutral: false,
    fuel: 100,
  });

  const [currentRpm, setCurrentRpm] = useState(0); // For smooth transitions
  const [targetRpm, setTargetRpm] = useState(0);

  const [currentSpeed, setCurrentSpeed] = useState(0); // For smooth transitions
  const [targetSpeed, setTargetSpeed] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (readyState === ReadyState.OPEN) {
      timerId = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(true);
    }

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [readyState]);

  useEffect(() => {
    const data = JSON.parse(lastMessage?.data ?? "{}");
    console.log("data", data);

    setConfig((prev) => ({
      ...prev,
      indicatorLeft: data?.p34 > 3000,
      indicatorRight: data?.p35 > 3000,
    }));

    setTargetRpm(
      (data ? Number(data?.p33 > 500 ? data?.p33 : 0) : 0) * RPM_MULTIPLIER
    ); // Update target RPM
    setTargetSpeed(
      Math.ceil((data ? Number(data?.svx ?? 0) : 0) * SPEED_MULTIPLIER)
    ); // Update target Speed
  }, [lastMessage]);

  useEffect(() => {
    if (currentRpm === targetRpm) return; // Exit if at target value

    const step = targetRpm > currentRpm ? 256 : -256; // Increment or decrement
    const interval = setInterval(() => {
      setCurrentRpm((prev) => {
        const nextValue = prev + step;
        if (
          (step > 0 && nextValue >= targetRpm) ||
          (step < 0 && nextValue <= targetRpm)
        ) {
          clearInterval(interval);
          setConfig((prevConfig) => ({
            ...prevConfig,
            rpm: targetRpm < 0 ? 0 : targetRpm, // Set the exact target RPM as final value
          }));
          return targetRpm;
        }

        // Update currentRpm incrementally and set it in config
        setConfig((prevConfig) => ({
          ...prevConfig,
          rpm: nextValue,
        }));
        return nextValue;
      });
    }, 10); // Adjust interval duration for smoothness

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [targetRpm, currentRpm]);

  useEffect(() => {
    if (currentSpeed === targetSpeed) return; // Exit if at target value

    const step = targetSpeed > currentSpeed ? 2 : -2; // Increment or decrement
    const interval = setInterval(() => {
      setCurrentSpeed((prev) => {
        const nextValue = prev + step;
        if (
          (step > 0 && nextValue >= targetSpeed) ||
          (step < 0 && nextValue <= targetSpeed)
        ) {
          clearInterval(interval);
          setConfig((prevConfig) => ({
            ...prevConfig,
            speed: targetSpeed < 0 ? 0 : targetSpeed, // Set the exact target RPM as final value
          }));
          return targetSpeed;
        }

        // Update currentSpeed incrementally and set it in config
        setConfig((prevConfig) => ({
          ...prevConfig,
          speed: nextValue,
        }));
        return nextValue;
      });
    }, 10); // Adjust interval duration for smoothness

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [targetSpeed, currentSpeed]);

  return {
    config,
    setConfig,
    isLoading,
    readyState,
  };
}

export default useConfig;
