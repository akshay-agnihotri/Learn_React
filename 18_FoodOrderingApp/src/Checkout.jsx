import { useContext } from "react";
import Modal2 from "./Modal2";
import UserProgressContext from "../store/UserProgressContext";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "./util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);
  const CartCtx = useContext(CartContext);

  const totalAmount = CartCtx.selectedMeals.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal2 open={userProgressCtx.progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />

        <div className="control-row">
          <Input label="Postal-code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button
            className="text-button"
            onClick={handleCloseCheckout}
            type="button"
          >
            Close
          </Button>
          <Button className="button">Submit</Button>
        </p>
      </form>
    </Modal2>
  );
}
