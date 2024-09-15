import { CartContext } from "../store/CartContext";
import { useContext, useState } from "react";
import Modal2 from "./Modal2";
import { currencyFormatter } from "./util/formatting";
import Button from "./UI/Button";
import PropTypes from "prop-types";

function Cart({ isOpen, onClose }) {
  // Add onClose prop
  const { selectedMeals, handleDecreaseQuantity, handleSelectMeal } =
    useContext(CartContext);

  const [goToCheckout, setGoToCheckout] = useState(false);

  const totalAmount = selectedMeals.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <Modal2 className="cart" open={isOpen}>
      {!goToCheckout && (
        <>
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
                  <Button type="button" onClick={() => handleSelectMeal(meal)}>
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
            <button className="text-button" type="button" onClick={onClose}>
              {" "}
              {/* Close button handler */}
              Close
            </button>
            <button
              className="button"
              type="button"
              onClick={() => {
                setGoToCheckout(true);
              }}
            >
              Go to Checkout
            </button>
          </div>
        </>
      )}
      {goToCheckout && (
        <>
          <div>hello kya haal chaal hai tmhare</div>
        </>
      )}
    </Modal2>
  );
}

// PropTypes validation
Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen must be a boolean and is required
  onClose: PropTypes.func.isRequired, // onClose must be a function and is required
};

export default Cart;
