import React, { useState } from "react";
import { CapturePhoto } from "./CapturePhoto";
import { MapWrapper } from "./MapWrapper";
import { AttachFile } from "./AttachFile";

export function NewPostPage() {
  const [postImage, setPostImage] = useState(null);
  const [dishName, setDishName] = useState("");

  function grabImage(e) {
    e.stopPropagation();
    const canvas = document.getElementById("canvas");
    if (canvas) {
      canvas.toBlob((blob) => {
        setPostImage(blob);
        // saveImage(blob);
        // const img = new Image();
        // Object URLs only released on document unload, release or they could eat up memory.
        // img.src = window.URL.createObjectURL(blob);
        // debugger;
      });
    }
  }

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
        <AttachFile grabImageFile={grabImage} attachPostImage={setPostImage} />
      );
    }

    return (
      <CapturePhoto
        dishName={dishName}
        setDishName={setDishName}
        grabCanvasImage={grabImage}
        attachPostImage={setPostImage}
      />
    );
  }

  return <div>{renderInterface()}</div>;
}
