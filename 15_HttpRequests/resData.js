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
