import React from "react";
import "../styles/componenet/Modal.css";

const Modal = ({ title, content, onConfirm, onClose, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <div className="modal-content">{content}</div>
        <div className="modal-actions">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn-confirm">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
