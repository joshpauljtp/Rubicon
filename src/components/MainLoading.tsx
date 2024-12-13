import { ReadyState } from "react-use-websocket";
import ApacheSideDanger from "../assets/ApacheSideDanger.png";
import ApacheSidePrimary from "../assets/ApacheSidePrimary.png";
import ApacheSideWarning from "../assets/ApacheSideWarning.png";

interface Props {
  connectionState: ReadyState;
}

function MainLoading({ connectionState }: Props) {
  function ApacheImage() {
    switch (connectionState) {
      case ReadyState.CONNECTING:
        return <img src={ApacheSideWarning} alt="apache side warning" />;
      case ReadyState.OPEN:
        return <img src={ApacheSidePrimary} alt="apache side primary" />;
      case ReadyState.CLOSED:
      case ReadyState.CLOSING:
        return <img src={ApacheSideDanger} alt="apache side danger" />;
    }
  }

  const text =
    connectionState === ReadyState.CONNECTING
      ? "Connecting..."
      : connectionState === ReadyState.OPEN
      ? "Connected"
      : "Connection Failed";

  return (
    <div className="main-loading">
      <ApacheImage />
      <h2>{text}</h2>
    </div>
  );
}

export default MainLoading;
