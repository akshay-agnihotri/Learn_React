import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// Forward ref for the Modal component
const Modal = forwardRef(function Modal(_props, modalRef) {
  const ref = useRef();

  // Use useImperativeHandle to expose functions to the parent component via ref
  useImperativeHandle(
    modalRef,
    () => {
      return {
        openModal() {
          ref.current.showModal();
        },
        closeModal() {
          ref.current.close();
        },
      };
    },
    []
  );

  // Render modal using createPortal
  return createPortal(
    <dialog className="modal" ref={ref}>
      <form method="dialog" className="cart">
        <h2>Your Cart</h2>
        <ul>
          <li className="cart-item">
            <p>xyz - 1 x price</p>
            <div className="cart-item-actions">
              <button type="button">+</button>1<button type="button">-</button>
            </div>
          </li>
          {/* Add more cart items here as needed */}
        </ul>
        <div className="cart-total">Total amount</div>
        <div className="modal-actions">
          <button className="text-button">Close</button>
          <button className="button" type="button">
            Go to Checkout
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById('root') // Create the portal inside #root
  );
});

Modal.propTypes = {
  modalRef: PropTypes.any,
};

export default Modal;