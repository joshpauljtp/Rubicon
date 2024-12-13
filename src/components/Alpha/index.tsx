import { Config } from "../../types";
import Fuel from "./Fuel";
import Indicator from "./Indicator";
import RPM from "./RPM";
import SecondaryIcons from "./SecondaryIcons";
import Speed from "./Speed";
import "./styles.css";

interface Props {
  config: Config;
}
function ClusterAlpha({ config }: Props) {
  const secondaryIcons = {
    abs: config.abs,
    service: config.service,
    highBeam: config.highBeam,
    neutral: config.neutral,
  };

  return (
    <>
      <section>
        <RPM rpm={config.rpm} />
        <Speed speed={config.speed} />
        <SecondaryIcons {...secondaryIcons} />
      </section>
      <Indicator dir="left" active={config.indicatorLeft} />
      <Fuel fuelPercent={config.fuel} />
      <Indicator dir="right" active={config.indicatorRight} />
    </>
  );
}

export default ClusterAlpha;
