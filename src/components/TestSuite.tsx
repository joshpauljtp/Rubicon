import { Config } from "../types";

interface Props {
  config: Config;
  setConfig: (config: Config) => void;
}

function TestSuite({ config, setConfig }: Props) {
  const MAX_SPEED = 200;
  const MAX_FUEL = 100;
  const MAX_RPM = 12000;

  return (
    <aside className="test-suite">
      <>
        Speed
        <div>
          <input
            type="range"
            min={0}
            max={MAX_SPEED}
            value={config.speed}
            onChange={(e) =>
              setConfig({ ...config, speed: parseInt(e.target.value) })
            }
          />
          <input
            type="number"
            value={config.speed}
            min={0}
            max={MAX_SPEED}
            onChange={(e) =>
              setConfig({ ...config, speed: parseInt(e.target.value) })
            }
          />
        </div>
      </>
      <>
        RPM
        <div>
          <input
            value={config.rpm}
            type="range"
            min={0}
            max={MAX_RPM}
            onChange={(e) =>
              setConfig({ ...config, rpm: parseInt(e.target.value) })
            }
          />
          <input
            value={config.rpm}
            type="number"
            min={0}
            max={MAX_RPM}
            onChange={(e) =>
              setConfig({ ...config, rpm: parseInt(e.target.value) })
            }
          />
        </div>
      </>

      <>
        Fuel
        <div>
          <input
            value={config.fuel}
            type="range"
            min={0}
            max={MAX_FUEL}
            onChange={(e) =>
              setConfig({ ...config, fuel: parseInt(e.target.value) })
            }
          />
          <input
            value={config.fuel}
            type="number"
            min={0}
            max={MAX_FUEL}
            onChange={(e) =>
              setConfig({ ...config, fuel: parseInt(e.target.value) })
            }
          />
        </div>
      </>
      <>
        Left Indicator
        <input
          type="checkbox"
          checked={config.indicatorLeft}
          onChange={(e) =>
            setConfig({ ...config, indicatorLeft: e.target.checked })
          }
        />
      </>

      <>
        Right Indicator
        <input
          type="checkbox"
          checked={config.indicatorRight}
          onChange={(e) =>
            setConfig({ ...config, indicatorRight: e.target.checked })
          }
        />
      </>

      <>
        High Beam
        <input
          type="checkbox"
          checked={config.highBeam}
          onChange={(e) => setConfig({ ...config, highBeam: e.target.checked })}
        />
      </>

      <>
        Neutral
        <input
          type="checkbox"
          checked={config.neutral}
          onChange={(e) => setConfig({ ...config, neutral: e.target.checked })}
        />
      </>

      <>
        ABS
        <input
          type="checkbox"
          checked={config.abs}
          onChange={(e) => setConfig({ ...config, abs: e.target.checked })}
        />
      </>

      <>
        Service reminder
        <input
          type="checkbox"
          checked={config.service}
          onChange={(e) => setConfig({ ...config, service: e.target.checked })}
        />
      </>
      <a href="/">
        <button>Back to Main Menu</button>
      </a>
    </aside>
  );
}

export default TestSuite;
