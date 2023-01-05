import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CapturePhoto } from "./CapturePhoto";
import { Map } from "./Map";

export function Post() {
  const [postImage, setPostImage] = useState(null);

  function grabImage(e) {
    const canvas = document.getElementById("canvas");
    canvas.toBlob((blob) => {
      // debugger;
      setPostImage(blob);
      // saveImage(blob);
      // const img = new Image();
      // Object URLs only released on document unload, release or they could eat up memory.
      // img.src = window.URL.createObjectURL(blob);
      // debugger;
    });
  }

  function renderInterface() {
    if (postImage) return <Map image={postImage} />;
    return <CapturePhoto grabCanvasImage={grabImage} />;
  }

  return (
    <div>
      Post
      {renderInterface()}
    </div>
  );
}
