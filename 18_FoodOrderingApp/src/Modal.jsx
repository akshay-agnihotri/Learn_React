import PropTypes from "prop-types";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./UI/Button";
import { currencyFormatter } from "./util/formatting";
import { CartContext } from "../store/CartContext";

// Forward ref for the Modal component
const Modal = forwardRef(function Modal(_props, modalRef) {
  const { selectedMeals, handleDecreaseQuantity, handleIncreaseQuantity } =
    useContext(CartContext);

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

  const totalAmount = selectedMeals.reduce(
    (total, meal) => total + meal.price * meal.quantity,
    0
  );

  return createPortal(
    <dialog className="modal" ref={ref}>
      <form method="dialog" className="cart">
        <h2>Your Cart</h2>
        <ul>
          {selectedMeals.map((meal) => (
            <li className="cart-item" key={meal.id}>
              <p>
                {meal.name} - {meal.quantity} x{" "}
                {currencyFormatter.format(meal.price)}
              </p>
              <div className="cart-item-actions">
                <Button
                  type="button"
                  onClick={() => handleDecreaseQuantity(meal.id)}
                >
                  -
                </Button>
                {meal.quantity}
                <Button
                  type="button"
                  onClick={() => handleIncreaseQuantity(meal)}
                >
                  +
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          TotalAmount: {currencyFormatter.format(totalAmount)}
        </div>
        <div className="modal-actions">
          <button className="text-button">Close</button>
          <button className="button" type="button">
            Go to Checkout
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

Modal.propTypes = {
  // selectedMeals: PropTypes.array.isRequired,
  modalRef: PropTypes.any,
};

export default Modal;
