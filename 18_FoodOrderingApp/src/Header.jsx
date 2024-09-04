// import React from 'react'
import { useRef } from "react";
import logo from "./assets/logo.jpg";
import Modal from "./Modal";
import Button from "./UI/Button";

function Header() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

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
          Cart
        </Button>
      </header>
    </>
  );
}

export default Header;
