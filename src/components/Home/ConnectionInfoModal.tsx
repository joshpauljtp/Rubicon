import Modal from "../core/Modal";

function ConnectionInfoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <h3>Connection Status</h3>
      <p>
        Your cluster is currently <span className="connected">Connected</span>
      </p>
    </Modal>
  );
}

export default ConnectionInfoModal;
