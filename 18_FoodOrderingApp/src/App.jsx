// Frontend (React Component)
import { useEffect, useState } from "react";
import Header from "./Header";
import Meals from "./Meals";
import { CartContextProvider } from "../store/CartContext";
import { UserProgressProvider } from "../store/UserProgressContext";

function App() {
  const [availableMeals, setAvailableMeals] = useState([]);
  // const [selectedMeals, setSelectedMeals] = useState([]);
  // const [isFetching, setIsFetching] = useState();
  // const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchAvailableMeals() {
      // setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();
        setAvailableMeals(data);
        // console.log(data);
      } catch (error) {
        console.log(error);

        // setError({ msg: error.message });
      }

      // setIsFetching(false);
    }

    fetchAvailableMeals();
  }, []);

  // function handleIncreaseQuantity(id) {
  //   setSelectedMeals((prvSelectedMeals) => {
  //     const updatedMeals = prvSelectedMeals.map((meal) =>
  //       meal.id === id ? { ...meal, quantity: meal.quantity + 1 } : { ...meal }
  //     );
  //     return updatedMeals;
  //   });
  // }

  // function handleDecreaseQuantity(id) {
  //   setSelectedMeals((prvSelectedMeals) => {
  //     const updatedMeals = prvSelectedMeals
  //       .map((meal) =>
  //         meal.id === id ? { ...meal, quantity: meal.quantity - 1 } : meal
  //       )
  //       .filter((meal) => meal.quantity > 0); // Remove meals with quantity 0
  //     return updatedMeals;
  //   });
  // }

  return (
    <>
      <UserProgressProvider>
        <CartContextProvider>
          <Header />
          <Meals availableMeals={availableMeals} />
        </CartContextProvider>
      </UserProgressProvider>
    </>
  );
}

export default App;
