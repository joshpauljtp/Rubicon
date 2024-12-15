import { useState } from "react";
import { ReadyState } from "react-use-websocket";
import CodeIcon from "../../assets/Info/CodeIcon";
import RiveIcon from "../../assets/Info/RiveIcon";
import { CLUSTERS } from "../constants";
import useConfig from "../useConfig";
import styles from "./styles.module.css";

function RiveInfoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <aside onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <h3>Creating a Custom Clustor with Rive</h3>
        <ol>
          <li>
            Make sure you learn and understand how to set up text runs, and
            inputs on your Rive file.
          </li>
          <li>
            As of the current version of Rubicon, you will need to create 3
            separate artboards with the following case-sensitive names:
            <ul>
              <li>Speedo</li>
              <li>RPM</li>
              <li>Fuel</li>
            </ul>
          </li>
          <li>
            With these 3 artboards, create a nested artboard called "Dash" and
            compose your final cluster layout.
          </li>
          <li>
            Ensure that the following case-sensitive inputs are set up in the
            respective artboard:
            <ul>
              <li>SpeedRun - text run</li>
              <li>Speed - number input</li>
              <li>RevRun - text run</li>
              <li>Rev - number input</li>
              <li>Fuel - number input</li>
              <li>Left Indicator - boolean input</li>
              <li>Right Indicator - boolean input</li>
              <li>ABS - boolean input</li>
              <li>Service - boolean input</li>
              <li>High Beam - boolean input</li>
            </ul>
          </li>
          <li>
            Ensure that the above inputs are also exported to the parent
            artboard, i.e. the nested artboard.
          </li>
          <li>
            Clone the Rubicon web-app and duplicate the
            "src/components/Testarossa" directory and rename it to your cluster
            name.
          </li>
          <li>
            In the index.tsx file of your newly created directory, replace the
            "RiveFile" import path with your own Rive file. Feel free to rename
            the Rive file and or move the Rive file into the Rubicon web-app.
          </li>
          <li>Inside constants.ts add a new entry for your new cluster.</li>
          <li>
            Congrats! Your cluster should be working now. For any support,
            please reach out to Joshua.
          </li>
        </ol>
      </div>
    </aside>
  );
}

function CodeInfoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <aside onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <h3>Creating a Custom Clustor with React code</h3>
        <ol>
          <li>Clone the Rubicon web-app from GitHub.</li>
          <li>Create your own cluster's directory under src/components.</li>
          <li>
            You can structure and compose your code however you see fit.
            Ultimately, your code should accept a config prop as defined in the
            root types.ts file.
          </li>
          <li>
            Update the constants.ts file to add a new entry for your new
            cluster.
          </li>
          <li>
            Congrats! Your cluster should be working now. For any support,
            please reach out to Joshua.
          </li>
        </ol>
      </div>
    </aside>
  );
}

function DemoInfoModal({
  open,
  onClose,
  switchDemoModeOff,
}: {
  open: boolean;
  onClose: () => void;
  switchDemoModeOff: () => void;
}) {
  if (!open) return null;

  return (
    <aside onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <h3>Rubicon is currently running in Demo Mode</h3>
        <p>
          This is a preemptive setting set to demonstrate the working of
          Rubicon's UI layer. Outside of Demo Mode, Rubicon attempts to connect
          to your motorcycle via the Rubicon H/W. Connection failures may lead
          to unexpected behavior. To override this, please click the button
          below.
        </p>
        <button onClick={switchDemoModeOff}>Disable Demo Mode</button>
      </div>
    </aside>
  );
}

function ConnectionInfoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <aside onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <h3>Connection Status</h3>
        <p>
          Your cluster is currently <span className="connected">Connected</span>
        </p>
      </div>
    </aside>
  );
}

function Info() {
  const [demoMode, setDemoMode] = useState(true);
  const [openModal, setOpenModal] = useState({
    riveInfo: false,
    codeInfo: false,
    demoInfo: false,
    connectionInfo: false,
  });

  const { isLoading, readyState } = useConfig();

  const getPillText = () => {
    if (demoMode) return "Demo Mode Active";
    switch (readyState) {
      case ReadyState.CONNECTING:
        return "Connecting to Motorcycle";
      case ReadyState.OPEN:
        return "Connected";
      default:
        return "Connection Failed";
    }
  };

  function ActivateButton({
    link,
    demoMode,
  }: {
    link: string;
    demoMode: boolean;
  }) {
    const btnText = demoMode ? "Demo" : "Launch";
    const href = `${link}${demoMode ? "?showTestSuite=true" : ""}`;
    const disabled = demoMode
      ? false
      : isLoading || readyState !== ReadyState.OPEN;

    return (
      <a href={href} className={disabled ? "pointerEvents-none" : ""}>
        <button disabled={disabled}>{btnText}</button>
      </a>
    );
  }

  return (
    <div id="infoPage" className={styles.page}>
      <header>
        <h1>RUBICON</h1>
        <button
          className={`pill cursor-help ${demoMode ? styles.demoMode : ""}`}
          onClick={() =>
            setOpenModal((prev) => {
              const key = demoMode ? "demoInfo" : "connectionInfo";
              return { ...prev, [key]: true };
            })
          }
        >
          {getPillText()}
        </button>
      </header>
      <section className={styles.info}>
        <h2>Custom Motorcycle Instrument Cluster</h2>
        <p>
          Welcome to Project Rubicon - combining IoT and Web tech to create a
          platform for your personal motorcycle instrument cluster. This project
          is currently in a POC state, with newer improvements being added over
          time. For more information, check out our link.
        </p>
        <div>
          <button>More Info</button>
          <a href="https://github.com/joshpauljtp/Rubicon" target="_blank">
            <button className="silent outlined">GitHub</button>
          </a>
        </div>
      </section>
      <section className={styles.clusterContainer}>
        <h2>Clusters</h2>
        {CLUSTERS.map((cluster) => (
          <div key={cluster.label} className={styles.cluster}>
            <img src={cluster.img} alt={cluster.label} />
            <div className={styles.details}>
              <h3>{cluster.label}</h3>
              <p>{cluster.desc}</p>
              <ActivateButton link={cluster.link} demoMode={demoMode} />
            </div>
          </div>
        ))}
        <div className={styles.cluster}>
          <div className={styles.details}>
            <h3>Add your own custom cluster</h3>
            <p>
              Create and use your very own custom cluster with either a Rive
              animation file or coding in React JS. This feature is still
              experimental and WIP, so your mileage may vary. You can find the
              steps to get started with your preferred method to the right.
            </p>
          </div>

          <div className={styles.ctaContainer}>
            <button
              onClick={() =>
                setOpenModal((prev) => ({ ...prev, riveInfo: true }))
              }
              className="silent outlined icon"
            >
              <RiveIcon fontSize={"5rem"} />
            </button>

            <button
              onClick={() =>
                setOpenModal((prev) => ({ ...prev, codeInfo: true }))
              }
              className="silent outlined icon"
            >
              <CodeIcon fontSize={"5rem"} />
            </button>
          </div>
        </div>
      </section>
      <section>
        Made by{" "}
        <a href="https://metamatic.dev" target="_blank">
          Joshua
        </a>
        .
      </section>
      <RiveInfoModal
        open={openModal.riveInfo}
        onClose={() => setOpenModal((prev) => ({ ...prev, riveInfo: false }))}
      />
      <CodeInfoModal
        open={openModal.codeInfo}
        onClose={() => setOpenModal((prev) => ({ ...prev, codeInfo: false }))}
      />
      {demoMode && (
        <DemoInfoModal
          open={openModal.demoInfo}
          onClose={() => setOpenModal((prev) => ({ ...prev, demoInfo: false }))}
          switchDemoModeOff={() => {
            setDemoMode(false);
            setOpenModal((prev) => ({ ...prev, demoInfo: false }));
          }}
        />
      )}
      <ConnectionInfoModal
        open={openModal.connectionInfo}
        onClose={() =>
          setOpenModal((prev) => ({ ...prev, connectionInfo: false }))
        }
      />
    </div>
  );
}

export default Info;
