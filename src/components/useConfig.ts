import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Config } from "../types";

const RPM_MULTIPLIER = 2;
const SPEED_MULTIPLIER = 0.05;

function useConfig() {
  const socketUrl = `ws://192.168.116.227:80/ws`;
  const { readyState, lastMessage, getWebSocket } = useWebSocket(socketUrl, {
    share: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [config, setConfig] = useState<Config>({
    speed: 0,
    rpm: 0,
    indicatorLeft: false,
    indicatorRight: false,
    abs: false,
    service: false,
    highBeam: false,
    neutral: true,
    fuel: 30,
  });

  const [currentRpm, setCurrentRpm] = useState(0); // For smooth transitions
  const [targetRpm, setTargetRpm] = useState(0);

  const [currentSpeed, setCurrentSpeed] = useState(0); // For smooth transitions
  const [targetSpeed, setTargetSpeed] = useState(0);

  // useEffect(() => {
  //   const ws = new WebSocket(socketUrl);

  //   ws.binaryType = "arraybuffer"; // Ensure binary data is received as ArrayBuffer

  //   ws.onmessage = (event) => {
  //     // Ensure the received data is an ArrayBuffer
  //     const buffer = event.data;

  //     // Parse the binary data using DataView
  //     const dataView = new DataView(buffer);

  //     // Extract the data in the same order it was packed on the server
  //     const rpm =
  //       (dataView.getUint8(0) << 24) |
  //       (dataView.getUint8(1) << 16) |
  //       (dataView.getUint8(2) << 8) |
  //       dataView.getUint8(3);

  //     const highBeam = (dataView.getUint8(4) << 8) | dataView.getUint8(5);
  //     const rightIndicator = (dataView.getUint8(6) << 8) | dataView.getUint8(7);
  //     const leftIndicator = (dataView.getUint8(8) << 8) | dataView.getUint8(9);

  //     // Log or use the parsed data
  //     console.log({
  //       rpm,
  //       highBeam,
  //       rightIndicator,
  //       leftIndicator,
  //     });

  //     // Update React state or UI as needed
  //   };
  // }, []);

  useEffect(() => {
    //Change binaryType property of WebSocket
    if (!getWebSocket()) return;
    (getWebSocket() as any).binaryType = "arraybuffer";

    console.log((getWebSocket() as any).binaryType, "wasd");
  }, []);

  useEffect(() => {
    let timerId: any;
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
    if (!lastMessage) return;
    // console.log(lastMessage);
    lastMessage.data.arrayBuffer().then((res: any) => {
      if (res) {
        const data = new DataView(res);

        // Extract the data in the same order it was packed on the server
        const rpm =
          (data.getUint8(0) << 24) |
          (data.getUint8(1) << 16) |
          (data.getUint8(2) << 8) |
          data.getUint8(3);

        const highBeam = (data.getUint8(4) << 8) | data.getUint8(5);
        const rightIndicator = (data.getUint8(6) << 8) | data.getUint8(7);
        const leftIndicator = (data.getUint8(8) << 8) | data.getUint8(9);

        // Log or use the parsed data
        console.log({
          rpm,
          highBeam,
          rightIndicator,
          leftIndicator,
        });

        setConfig((prev) => ({
          ...prev,
          highBeam: highBeam > 500,
          indicatorLeft: leftIndicator > 500,
          indicatorRight: rightIndicator > 500,
        }));

        setTargetRpm(rpm - 2000); // Update target RPM
      }
    });

    // console.log("data", data);

    // setTargetSpeed(
    //   Math.ceil((data ? Number(data?.svx ?? 0) : 0) * SPEED_MULTIPLIER)
    // ); // Update target Speed
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
