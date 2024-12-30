import { lazy, useState } from "react";
import { Cluster } from "../types";
import TestSuite from "./TestSuite";
import useConfig from "./useConfig";

const Alpha = lazy(() => import("./Alpha"));
const Funk = lazy(() => import("./Funk"));
const Testarossa = lazy(() => import("./Testarossa"));
const Layout = lazy(() => import("./core/Layout"));

const Wrapper = ({
  children,
  showTestSuite,
}: {
  children: React.ReactNode;
  showTestSuite: boolean;
}) => {
  if (showTestSuite) return <Layout>{children}</Layout>;
  else return <>{children}</>;
};

function ClusterSwapper({
  cluster,
  showTestSuite,
}: {
  cluster: Cluster;
  showTestSuite: boolean;
}) {
  const { config, setConfig } = useConfig();
  const [isFullscreen, setIsFullScreen] = useState(false);

  const DEFAULT_CLUSTER = Cluster.ALPHA;
  const ClusterComponent = {
    [Cluster.ALPHA]: <Alpha config={config} />,
    [Cluster.FUNK]: <Funk config={config} />,
    [Cluster.TESTAROSSA]: (
      <Testarossa config={config} showTestSuite={showTestSuite} />
    ),
  };

  const fullscreenToggle = () => {
    setIsFullScreen((prev) => !prev);

    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      const body = document.querySelector("body");
      body?.requestFullscreen();
    }
  };

  return (
    <Wrapper showTestSuite={showTestSuite}>
      <div
        className={`instrumentCluster ${showTestSuite ? "minHeight-auto" : ""}`}
        onClick={fullscreenToggle}
      >
        {ClusterComponent[cluster] ?? ClusterComponent[DEFAULT_CLUSTER]}
      </div>
      {showTestSuite && <TestSuite config={config} setConfig={setConfig} />}
    </Wrapper>
  );
}

export default ClusterSwapper;
