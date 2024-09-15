// import React from 'react'
import { useCallback, useContext, useMemo, useState } from "react";
import logo from "./assets/logo.jpg";
// import Modal from "./Modal";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import Cart from "./Cart";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const modalRef = useRef();
  const { selectedMeals } = useContext(CartContext);

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

  const handleShowModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      {/* <Modal ref={modalRef} /> */}
      <Cart isOpen={isModalOpen} onClose={handleCloseModal} />
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="A restaurant" />
          <h1>reactfood</h1>
        </div>
        <Button onClick={handleShowModal} classes="text-button">
          Cart({totalCartQuantity})
        </Button>
      </header>
    </>
  );
}

export default Header;
