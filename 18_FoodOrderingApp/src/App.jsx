// Frontend (React Component)
import { useEffect, useState } from "react";
import Header from "./Header";
import Meals from "./Meals";

function App() {
  const [meals, setMeals] = useState([]);
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
        setMeals(data);
        console.log(data);
      } catch (error) {
        console.log(error);

        // setError({ msg: error.message });
      }

      // setIsFetching(false);
    }

    fetchAvailableMeals();
  }, []);

  return (
    <>
      <Header />
      <Meals availableMeals={meals} />
    </>
  );
}

export default App;
