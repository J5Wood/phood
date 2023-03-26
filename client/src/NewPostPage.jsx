import React, { useState } from "react";
import { CapturePhoto } from "./CapturePhoto";
import { MapWrapper } from "./MapWrapper";
import { AttachFile } from "./AttachFile";

export function NewPostPage() {
  const [postImage, setPostImage] = useState(null);
  const [dishName, setDishName] = useState("");

  function renderInterface() {
    if (postImage)
      return (
        <MapWrapper
          image={postImage}
          dishName={dishName}
          resetImage={setPostImage}
        />
      );

    const pictureMethod = window.location.search.split("?")[1];

    if (pictureMethod === "file") {
      return (
        <AttachFile
          dishName={dishName}
          setDishName={setDishName}
          attachPostImage={setPostImage}
        />
      );
    }

    return (
      <CapturePhoto
        dishName={dishName}
        setDishName={setDishName}
        attachPostImage={setPostImage}
      />
    );
  }

  return <div>{renderInterface()}</div>;
}
