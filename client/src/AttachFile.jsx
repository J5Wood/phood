import React from "react";

export function AttachFile({ grabImageFile, attachPostImage }) {
  function handleNewFile(e) {
    e.preventDefault();
    const input = document.getElementById("newFileInput");
    const file = input.files[0];
    attachPostImage(file);
  }

  return (
    <div>
      <h1>Attach File</h1>
      <form onSubmit={(e) => handleNewFile(e)}>
        <label htmlFor="newFileInput" />
        <input id="newFileInput" type="file" />
        <input type="submit" />
      </form>
    </div>
  );
}
