import Modal from "../core/Modal";

function CodeInfoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <h3>Creating a Custom Clustor with React code</h3>
      <ol>
        <li>Clone the Rubicon web-app from GitHub.</li>
        <li>Create your own cluster's directory under src/components.</li>
        <li>
          You can structure and compose your code however you see fit.
          Ultimately, your code should accept a config prop as defined in the
          root types.ts file.
        </li>
        <li>
          Update the constants.ts file to add a new entry for your new cluster.
        </li>
        <li>
          Congrats! Your cluster should be working now. For any support, please
          reach out to Joshua.
        </li>
      </ol>
    </Modal>
  );
}

export default CodeInfoModal;
