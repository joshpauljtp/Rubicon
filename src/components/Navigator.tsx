import { lazy, useMemo } from "react";
import { Cluster } from "../types";
import ClusterSwapper from "./ClusterSwapper";
import { CLUSTERS } from "./constants";

const Info = lazy(() => import("./Info"));
const Home = lazy(() => import("./Home"));

function Navigator() {
  const { cluster, pathname, showTestSuite } = useMemo(() => {
    const { search, pathname } = window.location;
    const params = new URLSearchParams(search);

    const cleanPathname = pathname.replace(/\//g, "").toUpperCase();

    return {
      showTestSuite: params.get("showTestSuite") === "true",
      cluster: cleanPathname as Cluster,
      pathname,
    };
  }, []);

  if (CLUSTERS.map((c) => c.link).includes(pathname))
    return <ClusterSwapper cluster={cluster} showTestSuite={showTestSuite} />;
  else if (pathname === "/info") return <Info />;

  return <Home />;
}

export default Navigator;
