// import React from "react";
import PropTypes from "prop-types";
import { currencyFormatter } from "./util/formatting";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

function Meals({ availableMeals }) {
  const { handleSelectMeal } = useContext(CartContext);

  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <li className="meal-item" key={meal.id}>
          <article>
            <img src={`../backend/public/${meal.image}`} alt={meal.name} />
            <div>
              <h3>{meal.name}</h3>
              <div className="meal-item-price">
                {currencyFormatter.format(meal.price)}
              </div>
              <div className="meal-item-description">{meal.description}</div>
            </div>
            <p className="meal-item-actions">
              <Button classes="button" onClick={() => handleSelectMeal(meal)}>
                Addto Cart
              </Button>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

Meals.propTypes = {
  availableMeals: PropTypes.array.isRequired,
  // handleSelectMeal: PropTypes.func.isRequired,
};

export default Meals;
