import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";
import RiveFile from "../../assets/Testarossa/testarossa.riv";
import { Config } from "../../types";
import "./styles.css";

interface Props {
  config: Config;
}
function ClusterTestarossa({ config }: Props) {
  const { rive, RiveComponent } = useRive({
    src: RiveFile,
    stateMachines: "State Machine 1",
    artboard: "Dash",
    autoplay: true,
  });

  useEffect(() => {
    rive?.setTextRunValueAtPath("SpeedRun", config.speed.toString(), "Speedo");
    rive?.setNumberStateAtPath("Speed", config.speed / 2, "Speedo");

    rive?.setBooleanStateAtPath("High Beam", config.highBeam, "Speedo");
    rive?.setBooleanStateAtPath(
      "Left Indicator",
      config.indicatorLeft,
      "Speedo"
    );
    rive?.setBooleanStateAtPath(
      "Right Indicator",
      config.indicatorRight,
      "Speedo"
    );

    rive?.setTextRunValueAtPath(
      "RevRun",
      Math.floor(config.rpm / 1000).toString(),
      "RPM"
    );
    rive?.setBooleanStateAtPath("ABS", config.abs, "RPM");
    rive?.setBooleanStateAtPath("Service", config.service, "RPM");
    rive?.setBooleanStateAtPath("Neutral", config.neutral, "RPM");

    rive?.setNumberStateAtPath("Fuel", config.fuel, "Fuel");
    rive?.setNumberStateAtPath("Rev", config.rpm / 100, "RPM");
  }, [rive, config]);

  return (
    <RiveComponent
      style={{ width: "100% !important", aspectRatio: "18 / 9" }}
    />
  );
}

export default ClusterTestarossa;
