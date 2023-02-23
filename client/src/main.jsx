import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LoginModule } from "./LoginModule";
import { Browse } from "./Browse";
import { Home } from "./Home";
import { AddPhoto } from "./AddPhoto";
import { NewPostPage } from "./NewPostPage";
import { Post } from "./Post";

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
        path: "post/:postId",
        element: <Post />,
      },
      {
        path: "add-photo",
        element: <AddPhoto />,
      },
      {
        path: "browse",

        element: <Browse />,
      },
      {
        path: "post",

        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
