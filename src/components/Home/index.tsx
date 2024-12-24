import { useState } from "react";
import { ReadyState } from "react-use-websocket";
import CodeIcon from "../../assets/Info/CodeIcon";
import RiveIcon from "../../assets/Info/RiveIcon";
import { CLUSTERS } from "../constants";
import Layout from "../core/Layout";
import CodeInfoModal from "../Home/CodeInfoModal";
import ConnectionInfoModal from "../Home/ConnectionInfoModal";
import DemoInfoModal from "../Home/DemoInfoModal";
import RiveInfoModal from "../Home/RiveInfoModal";
import useConfig from "../useConfig";
import styles from "./styles.module.css";

function Home() {
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
    <Layout
      headerChildren={
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
      }
    >
      <section className={styles.info}>
        <h2>Custom Motorcycle Instrument Cluster</h2>
        <p>
          Welcome to Project Rubicon - combining IoT and Web tech to create a
          platform for your personal motorcycle instrument cluster. This project
          is currently in a POC state, with newer improvements being added over
          time. For more information, check out our link.
        </p>
        <div>
          <a href="/info">
            <button>More Info</button>
          </a>
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
    </Layout>
  );
}

export default Home;