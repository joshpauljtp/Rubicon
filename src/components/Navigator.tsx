import { useMemo } from "react";
import { Cluster } from "../types";
import Clusters from "./Clusters";
import ClusterSwapper from "./ClusterSwapper";
import { CLUSTERS } from "./constants";
import Info from "./Info";

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
  else if (pathname === "/clusters") return <Clusters />;

  return <Info />;
}

export default Navigator;
