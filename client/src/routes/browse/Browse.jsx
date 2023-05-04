import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../actions/PostActions";
import "./browse.css";

export function Browse() {
  const { status, data, error } = useQuery(["posts"], () => getPosts());
  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  return (
    <div className="browse-page">
      <h2 className="browse-page-heading">Browse</h2>
      <div className="browse-page-listings">
        {data.data.map((d) => {
          return (
            <div className="post-preview" key={d.id}>
              <img
                className="post-image"
                src={d.attributes.get_image_url}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
