import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../actions/PostActions";
import "./browse.css";
import { useNavigate } from "react-router-dom";

export function Browse() {
  const navigate = useNavigate();
  function navToPage(id) {
    navigate(`/posts/${id}`);
  }
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
            <span
              onClick={() => navToPage(d.id)}
              className="post-preview"
              key={d.id}
            >
              <img
                className="post-image"
                src={d.attributes.get_image_url}
              ></img>
            </span>
          );
        })}
      </div>
    </div>
  );
}
