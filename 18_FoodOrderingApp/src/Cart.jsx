import { CartContext } from "../store/CartContext";
import { useContext } from "react";
import Modal2 from "./Modal2";
import { currencyFormatter } from "./util/formatting";
import Button from "./UI/Button";
import PropTypes from "prop-types";
import UserProgressContext from "../store/UserProgressContext";

function Cart({ isOpen }) {
  // Add onClose prop
  const { selectedMeals, handleDecreaseQuantity, handleSelectMeal } =
    useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  function handleGoToCheckOut(){
    userProgressCtx.showCheckout();
  }

  function handleCloseCart(){
    userProgressCtx.hideCart();
  }


  // const [goToCheckout, setGoToCheckout] = useState(false);

  const totalAmount = selectedMeals.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <Modal2 className="cart" open={isOpen}>
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
        <button className="text-button" type="button" onClick={handleCloseCart}>
          {" "}
          {/* Close button handler */}
          Close
        </button>
        <button
          className="button"
          type="button"
          onClick={handleGoToCheckOut}
        >
          Go to Checkout
        </button>
      </div>
    </Modal2>
  );
}

// PropTypes validation
Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen must be a boolean and is required
};

export default Cart;
