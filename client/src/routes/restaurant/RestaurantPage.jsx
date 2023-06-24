import React from "react";
import { useQuery } from "react-query";
import { getRestaurant } from "../../actions/RestaurantActions";
import { useParams } from "react-router-dom";

export function RestaurantPage() {
  const params = useParams();
  const { status, data, error } = useQuery(["restuarant"], () =>
    getRestaurant(params.id)
  );

  function displayDishes(dishes) {
    return dishes.map((dish) => {
      return (
        <span className="dish-thumbnail" key={dish.id}>
          <h3>{dish.name}</h3>
        </span>
      );
    });
  }

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  const { name, address, dishes } = data.attributes;

  return (
    <div className="restaurant-page">
      <h2>{name}</h2>
      <p>{address}</p>
      {displayDishes(dishes)}
    </div>
  );
}
