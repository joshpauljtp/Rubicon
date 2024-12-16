import Modal from "../core/Modal";

function DemoInfoModal({
  open,
  onClose,
  switchDemoModeOff,
}: {
  open: boolean;
  onClose: () => void;
  switchDemoModeOff: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <h3>Rubicon is currently running in Demo Mode</h3>
      <p>
        This is a preemptive setting set to demonstrate the working of Rubicon's
        UI layer. Outside of Demo Mode, Rubicon attempts to connect to your
        motorcycle via the Rubicon H/W. Connection failures may lead to
        unexpected behavior. To override this, please click the button below.
      </p>
      <button onClick={switchDemoModeOff}>Disable Demo Mode</button>
    </Modal>
  );
}

export default DemoInfoModal;
