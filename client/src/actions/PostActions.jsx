import React from "react";

export async function saveImage(img) {
  console.log(img);
  debugger;
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      Accept: "application/octet-stream",
    },
    body: img,
  };
  const resp = await fetch("http://localhost:3001/", configObj);
  const data = await resp.json();
  debugger;
}
