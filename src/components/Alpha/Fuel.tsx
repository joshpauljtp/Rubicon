import { useEffect, useState } from "react";
import FuelPump from "../../assets/FuelPump";

enum FuelState {
  Critical = "critical",
  Warning = "warning",
  Normal = "normal",
}

interface Props {
  fuelPercent: number;
}

function Fuel({ fuelPercent }: Props) {
  const [fuelState, setFuelState] = useState(FuelState.Normal);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (fuelPercent < 20) {
      setFuelState(FuelState.Critical);
      if (fuelPercent < 10) {
        setAlert(true);
      }
    } else if (fuelPercent < 40) {
      setFuelState(FuelState.Warning);
      setAlert(false);
    } else {
      setFuelState(FuelState.Normal);
      setAlert(false);
    }
  }, [fuelPercent]);

  return (
    <div className="small fuel" data-state={fuelState} data-alert={alert}>
      <div className="fuel__alert">
        <FuelPump fontSize={"3rem"} />
        <span>FUEL LEVEL CRITICAL</span>
      </div>
      <div className="fuel__container">
        <div className="fuel__level" style={{ width: `${fuelPercent}%` }}></div>
      </div>
      <div className="fuel__divisions">
        <span>E</span>
        <span style={{ width: "3rem" }}>
          <FuelPump className="fuel__icon" />
        </span>
        <span>F</span>
      </div>
    </div>
  );
}

export default Fuel;
