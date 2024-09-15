// import React from 'react'
import { useContext, useMemo } from "react";
import logo from "./assets/logo.jpg";
// import Modal from "./Modal";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Header() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const modalRef = useRef();
  const { selectedMeals } = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartQuantity = useMemo(() => {
    return selectedMeals.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
  }, [selectedMeals]);

  //memoize this function

  // function handleShowModal() {
  //   setIsModalOpen(true);
  // }

  // const handleShowModal = useCallback(() => {
  //   setIsModalOpen(true);
  // }, []);

  // const handleCloseModal = useCallback(() => {
  //   setIsModalOpen(false);
  // }, []);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <>
      {/* <Modal ref={modalRef} /> */}
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="A restaurant" />
          <h1>reactfood</h1>
        </div>
        <Button onClick={handleShowCart} classes="text-button">
          Cart({totalCartQuantity})
        </Button>
      </header>
    </>
  );
}

export default Header;
