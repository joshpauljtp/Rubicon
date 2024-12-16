import Modal from "../core/Modal";

function RiveInfoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <h3>Creating a Custom Clustor with Rive</h3>
      <ol>
        <li>
          Make sure you learn and understand how to set up text runs, and inputs
          on your Rive file.
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
          Ensure that the above inputs are also exported to the parent artboard,
          i.e. the nested artboard.
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
          Congrats! Your cluster should be working now. For any support, please
          reach out to Joshua.
        </li>
      </ol>
    </Modal>
  );
}
export default RiveInfoModal;
