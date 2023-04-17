import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LoginModule } from "./routes/login/LoginModule";
import { Browse } from "./routes/browse/Browse";
import { Home } from "./routes/home/Home";
import { NewPostPage } from "./routes/new-post/NewPostPage";
import { Post } from "./routes/post/Post";
import { Library } from "./routes/library/Library";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginModule />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "new-post",
        element: <NewPostPage />,
      },
      {
        path: "posts/:postId",
        element: <Post />,
      },
      {
        path: "library",

        element: <Library />,
      },
      {
        path: "browse",

        element: <Browse />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
