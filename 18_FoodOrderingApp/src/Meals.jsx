// import React from "react";
import PropTypes from "prop-types";

function Meals({ availableMeals }) {
  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <li className="meal-item" key={meal.id}>
          <article>
            <img src={`../backend/public/${meal.image}`} alt={meal.name} />
            <div>
              <h3>{meal.name}</h3>
              <div className="meal-item-price">${meal.price}</div>
              <div className="meal-item-description">{meal.description}</div>
            </div>
            <p className="meal-item-actions">
              <button className="button">Addto Cart</button>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

Meals.propTypes = {
  availableMeals: PropTypes.array.isRequired,
};

export default Meals;
