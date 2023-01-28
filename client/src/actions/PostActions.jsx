export async function savePost(img, dish, location) {
  const fd = new FormData();
  fd.append("image", img);
  fd.append("dish", dish);
  fd.append("location", location);
  let configObj = {
    method: "POST",
    body: fd,
  };
  const resp = await fetch("http://localhost:3001/posts", configObj);
  const data = await resp.json();
  debugger;
}
