import React from "react";

function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <aside onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </aside>
  );
}

export default Modal;
