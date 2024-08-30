import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { resData } from "../../resData.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // to show some fallback text we use isLoading useState() .
  const [error, setError] = useState(); // if any error occured then we will use this useState() .

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);
      
      try {
        const responseData = await resData();
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const sortedPlaces = sortPlacesByDistance(
              responseData.places,
              position.coords.latitude,
              position.coords.longitude
            );
            setAvailablePlaces(sortedPlaces);
          },
          () => {
            throw new Error("please provide your current location...")
          }
        );
      } catch (error) {
        setError({ message: error.message });
      }

      setIsLoading(false);
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="Unable to fetch Places !" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Loading data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
