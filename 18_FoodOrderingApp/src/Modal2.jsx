import { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function Modal2({ children, open, className = "" }) {
  const modalRef = useRef();

  // useEffect(() => {
  //   const modal = modalRef.current;
  //   if (open) {
  //     modal.showModal();
  //   } else {
  //     modal.close();
  //   }
  // }, [open]);

  useEffect(() => {
    const modal = modalRef.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return (
    <dialog ref={modalRef} className={`modal ${className}`}>
      {children}
    </dialog>
  );
}

// PropTypes validation
Modal2.propTypes = {
  children: PropTypes.node.isRequired, // children is required and should be a React node
  open: PropTypes.bool.isRequired, // open is required and should be a boolean
  className: PropTypes.string, // className should be a string
};

export default Modal2;
