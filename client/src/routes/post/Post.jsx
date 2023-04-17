import React, { useEffect, useState } from "react";
import { getPost } from "../../actions/PostActions";

export function Post() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    dataFetchWrapper(id);
  }, []);

  async function dataFetchWrapper(id) {
    const resp = await getPost(id);
    if (resp.data) {
      setPost(resp.data);
    } else {
      console.log(resp);
      // *** Handle errors
    }
  }

  function renderPost() {
    if (post) {
      const { get_image_url, dish, restaurant } = post.attributes;
      return (
        <>
          <img className="post-image" src={get_image_url} />
          <h2>{dish.name}</h2>
          <h4>{restaurant.name}</h4>
        </>
      );
    } else {
      return <h3>Loading</h3>;
    }
  }

  return <div>{renderPost()}</div>;
}
