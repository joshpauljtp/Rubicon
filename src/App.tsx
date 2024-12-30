import { Analytics } from "@vercel/analytics/react";
import Navigator from "./components/Navigator";

import riveWASMResource from "@rive-app/canvas/rive.wasm";
function App() {
  return (
    <>
      <link
        rel="preload"
        href={riveWASMResource}
        as="fetch"
        crossOrigin="anonymous"
      />
      <Analytics />
      <Navigator />
    </>
  );
}

export default App;
