import { useMemo } from "react";

interface Props {
  rpm: number;
}

enum Level {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

const DIVISIONS = 12;
const MEDIUM_START = 6;
const HIGH_START = 9;

function RPM({ rpm }: Props) {
  function RpmDivision({ index: i }: { index: number }) {
    const level =
      i < MEDIUM_START ? Level.LOW : i < HIGH_START ? Level.MEDIUM : Level.HIGH;
    const active = rpm > i * 1000;
    const divisionProgress = useMemo(() => {
      if (active) {
        return Math.min((rpm - i * 1000) / 10, 100) + "%";
      }
      return 0;
    }, [active, rpm, i]);

    return (
      <div
        className="rpm__division"
        data-level={level}
        data-active={active}
        style={
          {
            "--divisionProgress": divisionProgress,
          } as any
        }
      />
    );
  }

  return (
    <div className="rpm">
      <div className="rpm__container">
        {[...Array(DIVISIONS)].map((_, i) => (
          <RpmDivision key={i} index={i} />
        ))}
      </div>
      <span>RPM</span>
      <span>{rpm}</span>
    </div>
  );
}

export default RPM;
