export async function savePost(img, dish, location, userId) {
  const fd = new FormData();
  fd.append("image", img);
  fd.append("dish", dish);
  fd.append("location", location);
  fd.append("uid", userId);
  let configObj = {
    method: "POST",
    body: fd,
  };
  const resp = await fetch("http://localhost:3001/posts", configObj);
  const data = await resp.json();
  debugger;
}
