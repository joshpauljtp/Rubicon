import IndicatorArrow from "../../assets/IndicatorArrow";

interface Props {
  dir: "left" | "right";
  active?: boolean;
}

function Indicator({ dir, active }: Props) {
  return (
    <div className="small indicator" data-active={active}>
      <div>
        <IndicatorArrow dir={dir} />
      </div>
    </div>
  );
}

export default Indicator;
