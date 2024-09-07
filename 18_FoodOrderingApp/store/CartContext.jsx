import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// Initial context
export const CartContext = createContext({
  selectedMeals: [],
  handleIncreaseQuantity: () => {},
  handleDecreaseQuantity: () => {},
  handleSelectMeal: () => {},
});

// Reducer function to handle the actions
function cartReducer(state, action) {
  switch (action.type) {
    case "SELECT_MEAL": {
      const existingMeal = state.find((meal) => meal.id === action.meal.id);
      if (existingMeal) {
        return state.map((meal) =>
          meal.id === action.meal.id
            ? { ...meal, quantity: meal.quantity + 1 }
            : meal
        );
      } else {
        const newMeal = { ...action.meal, quantity: 1 };
        return [...state, newMeal];
      }
    }
    case "INCREASE_QUANTITY": {
      return state.map((meal) =>
        meal.id === action.id ? { ...meal, quantity: meal.quantity + 1 } : meal
      );
    }
    case "DECREASE_QUANTITY": {
      return state
        .map((meal) =>
          meal.id === action.id
            ? { ...meal, quantity: meal.quantity - 1 }
            : meal
        )
        .filter((meal) => meal.quantity > 0); // Remove meals with 0 quantity
    }
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [selectedMeals, dispatch] = useReducer(cartReducer, []);

  // Action handlers
  function handleSelectMeal(meal) {
    dispatch({ type: "SELECT_MEAL", meal });
  }

  function handleIncreaseQuantity(id) {
    dispatch({ type: "INCREASE_QUANTITY", id });
  }

  function handleDecreaseQuantity(id) {
    dispatch({ type: "DECREASE_QUANTITY", id });
  }

  return (
    <CartContext.Provider
      value={{
        selectedMeals,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleSelectMeal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.any,
};
