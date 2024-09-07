// import React from 'react'
import { useContext, useRef } from "react";
import logo from "./assets/logo.jpg";
import Modal from "./Modal";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

function Header() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const { selectedMeals } = useContext(CartContext);

  const totalCartQuantity = selectedMeals.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  function handleShowModal() {
    modalRef.current.openModal();
  }

  return (
    <>
      <Modal ref={modalRef} />
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
