import React, { useEffect, useState } from "react";
import { getPost } from "./actions/PostActions";

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
      return (
        <>
          <h3>I'm a post</h3>
          <img className="post-image" src={post.attributes.get_image_url} />
        </>
      );
    } else {
      return <h3>Loading</h3>;
    }
  }

  return <div>{renderPost()}</div>;
}
