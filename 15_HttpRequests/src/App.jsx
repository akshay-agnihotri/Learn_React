import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { fetchUserPlaces, updateUserPlaces } from "../resData.js";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // to show some fallback text we use isLoading useState() .
  const [error, setError] = useState(null); // if any error occured in fetching userPlaces then we will use this useState() .

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [putDataError, setPutDataError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    async function fetchUserPlaceData() {
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
        setIsFetching(false);
      } catch (error) {
        setError({ msg: error.message });
        setIsFetching(false);
      }
    }

    fetchUserPlaceData();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      // if (!prevPickedPlaces) {
      //   prevPickedPlaces = [];  //don't know why this code is here...
      // }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      if (!userPlaces.some((place) => place.id === selectedPlace.id)) {
        // to ensure REPEATED places does not go into our database we use if() block
        await updateUserPlaces([selectedPlace, ...userPlaces]);
      }
    } catch (error) {
      setUserPlaces(userPlaces);
      setPutDataError({ msg: error.message || "Failed to Update the Places" });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      try {
        await updateUserPlaces(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
      } catch (error) {
        setUserPlaces(userPlaces);
        setPutDataError({
          msg: error.message || "Failed to delete the Places",
        });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleError() {
    setPutDataError(null);
  }

  function handleDataFetchError() {
    setError(null);
  }

  return (
    <>
      <Modal open={putDataError} onClose={handleError}>
        {putDataError && (
          <ErrorPage
            title="An Error Occured"
            message={putDataError.msg}
            onConfirm={handleError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && (
          <ErrorPage
            title="An Error Occured"
            message={error.msg}
            onConfirm={handleDataFetchError}
          />
        )}
        {!error && (
          <Places
            title="I'd like to visit ..."
            isLoading={isFetching}
            loadingText="fetching your places.."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
