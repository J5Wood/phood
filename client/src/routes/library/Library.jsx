import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../actions/PostActions";

// *** Change to dynamic ID retrieval

export function Library() {
  const { status, data, error } = useQuery(["posts"], () => getPosts(2));

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <p>{error}</p>;
  }

  console.log(data.data.length);

  return (
    <div>
      <h2>Library</h2>
      {data.data.map((d) => {
        return (
          <span key={d.id}>
            <img
              className="post-preview"
              src={d.attributes.get_image_url}
            ></img>
          </span>
        );
      })}
    </div>
  );
}