import ABS from "../../assets/ABS";
import HighBeam from "../../assets/HighBeam";
import Neutral from "../../assets/Neutral";
import Service from "../../assets/Service";

interface Props {
  abs: boolean;
  service: boolean;
  highBeam: boolean;
  neutral: boolean;
}

function SecondaryIcons({ abs, service, highBeam, neutral }: Props) {
  const ICONS = [
    <ABS className="abs" data-active={!!abs} />,
    <Service className="service" data-active={!!service} />,
    <HighBeam className="highBeam" data-active={!!highBeam} />,
    <Neutral className="neutral" data-active={!!neutral} />,
  ];

  return <div className="secondary__icons">{ICONS.map((icon) => icon)}</div>;
}

export default SecondaryIcons;
