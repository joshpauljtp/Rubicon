import { lazy, Suspense, useState } from "react";
import { Cluster } from "../types";
import TestSuite from "./TestSuite";
import useConfig from "./useConfig";

const Alpha = lazy(() => import("./Alpha"));
const Funk = lazy(() => import("./Funk"));
const Testarossa = lazy(() => import("./Testarossa"));

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
    [Cluster.TESTAROSSA]: <Testarossa config={config} />,
  };

  const onMainClick = () => {
    setIsFullScreen((prev) => !prev);

    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      const body = document.querySelector("body");
      body?.requestFullscreen();
    }
  };
  return (
    <Suspense>
      <main onClick={onMainClick}>
        {ClusterComponent[cluster] ?? ClusterComponent[DEFAULT_CLUSTER]}
      </main>
      {showTestSuite && <TestSuite config={config} setConfig={setConfig} />}
    </Suspense>
  );
}

export default ClusterSwapper;
