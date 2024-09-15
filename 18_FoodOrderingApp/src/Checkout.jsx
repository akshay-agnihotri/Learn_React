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

  function handleSubmit(event) {
    event.preventDefault(); //it prevents our form from getting submitted," it's better to clarify that it prevents the default submission behavior (i.e., reloading the page or sending a request)

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); //{email:"akshay@1234"...}

    console.log(customerData);
  }

  return (
    <Modal2
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

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
