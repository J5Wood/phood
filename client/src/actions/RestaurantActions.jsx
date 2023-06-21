const restaurantsUrl = "http://localhost:3001/restaurants";

export async function getRestaurant(id) {
  try {
    const resp = await fetch(`${restaurantsUrl}/${id}`);
    const data = await resp.json();
    if (data.data) {
      return data.data;
    } else {
      console.log("ERROR");
    }
  } catch (error) {
    console.log(error);
  }
}
