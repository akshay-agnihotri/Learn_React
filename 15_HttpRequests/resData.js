// fetching the available-places...
export async function resData() {
  try {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch Places");
    }

    return resData;
  } catch (error) {
    throw error;
  }
}

// fetching the user-places(selected by user)...
export async function fetchUserPlaces() {
  try {
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch Places");
    }

    return resData.places;
  } catch (error) {
    throw error;
  }
}


// putting places array into our dataBase...
export async function updateUserPlaces(places) {
  try {
    const response = await fetch("http://localhost:3000/user-places", {
      method: "PUT", // Update ke liye PUT request use kar rahe hain
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ places: places }), // User places ko send kar rahe hain
    });

    const resData = response.json();

    if (!response.ok) {
      throw new Error("Failed to update user data");
    }

    return resData.message;
  } catch (error) {
    throw error;
  }
}


