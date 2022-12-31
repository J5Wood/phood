export async function saveImage(img) {
  const fd = new FormData();
  fd.append("image", img);
  let configObj = {
    method: "POST",
    body: fd,
  };
  const resp = await fetch("http://localhost:3001/posts", configObj);
  const data = await resp.json();
  debugger;
}
