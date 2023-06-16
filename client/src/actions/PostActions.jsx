const postsUrl = "http://localhost:3001/posts";

function getConfig(user) {
  let config;
  if (user) {
    console.log("true", user);
    const token = localStorage.getItem("token");
    config = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    console.log("false", user);
    config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
  }
  return config;
}

export async function getPosts(confirmUser = null) {
  const configObj = getConfig(confirmUser);
  const resp = await fetch(`${postsUrl}`, configObj);
  const data = await resp.json();
  return data;
}

export async function savePost(img, dish, location) {
  const token = localStorage.getItem("token");
  const fd = new FormData();
  fd.append("image", img);
  fd.append("dish", dish);
  fd.append("location", location);
  let configObj = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
