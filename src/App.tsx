import { Analytics } from "@vercel/analytics/react";
import Navigator from "./components/Navigator";
function App() {
  return (
    <>
      <Analytics />
      <Navigator />
    </>
  );
}

export default App;
