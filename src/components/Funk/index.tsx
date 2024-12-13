import { Config } from "../../types";
import Fuel from "./Fuel";
import Speed from "./Speed";
import "./styles.css";

interface Props {
  config: Config;
}

function ClusterFunk({ config }: Props) {
  return (
    <>
      <Speed speed={config.speed} />
      <Fuel fuelPercent={config.fuel} />
      <Fuel fuelPercent={config.fuel} />
      <Speed speed={config.speed} />
    </>
  );
}

export default ClusterFunk;
