import React from "react";

export function AttachFile({ dishName, setDishName, attachPostImage }) {
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
        <label htmlFor="dish-input">Dish Name:</label>
        <input
          type="text"
          name="dish-input"
          id="dish-input"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
}
