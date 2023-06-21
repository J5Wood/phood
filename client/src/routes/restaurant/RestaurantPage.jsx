import React from "react";
import { useQuery } from "react-query";
import { getRestaurant } from "../../actions/RestaurantActions";
import { useParams } from "react-router-dom";

export function RestaurantPage() {
  const params = useParams();
  const { status, data, error } = useQuery(["restuarant"], () =>
    getRestaurant(params.id)
  );

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  const { name, address } = data.attributes;

  return (
    <div className="restaurant-page">
      <h2>{name}</h2>
      <p>{address}</p>
    </div>
  );
}
