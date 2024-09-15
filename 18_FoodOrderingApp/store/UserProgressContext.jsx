// import React from 'react'

import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const UserProgressContext = createContext({
  progress: "", //'cart' or 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressProvider({ children }) {
  const [progress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const contextValue = useMemo(
    () => ({
      progress,
      showCart,
      hideCart,
      showCheckout,
      hideCheckout,
    }),
    [progress]
  );

  return (
    <UserProgressContext.Provider
      value={contextValue}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;

UserProgressProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
