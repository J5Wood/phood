const postsUrl = "http://localhost:3001/posts";

export async function getPosts(userId = null) {
  const resp = await fetch(`${postsUrl}?uid=${userId}`);
  const data = await resp.json();
  return data;
}

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
  const resp = await fetch(`${postsUrl}`, configObj);
  const data = await resp.json();
  return data;
}

export async function getPost(id) {
  const resp = await fetch(`${postsUrl}/${id}`);
  const data = await resp.json();
  return data;
}
