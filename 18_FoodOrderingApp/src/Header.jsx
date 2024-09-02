// import React from 'react'
import { useRef } from "react";
import logo from "./assets/logo.jpg";
import Modal from "./Modal";

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
        <button onClick={handleShowModal} className="text-button">
          Cart
        </button>
      </header>
    </>
  );
}

export default Header;
