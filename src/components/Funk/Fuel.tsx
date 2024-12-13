import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (fuelPercent < 20) {
      setFuelState(FuelState.Critical);
    } else if (fuelPercent < 40) {
      setFuelState(FuelState.Warning);
    } else {
      setFuelState(FuelState.Normal);
    }
  }, [fuelPercent]);

  return <div className="fuel" data-state={fuelState}></div>;
}

export default Fuel;
