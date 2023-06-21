import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import { Layout } from "./components/layout/Layout";
import { LoginModule } from "./routes/login/LoginModule";
import { Browse } from "./routes/browse/Browse";
import { Home } from "./routes/home/Home";
import { NewPostPage } from "./routes/new-post/NewPostPage";
import { Post } from "./routes/post/Post";
import { Library } from "./routes/library/Library";
import { RequireAuth } from "./helpers/RequireAuth";
import { RestaurantPage } from "./routes/restaurant/RestaurantPage";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Layout children={<LoginModule />} />,
    },
    {
      path: "/home",
      element: (
        <RequireAuth>
          <Layout children={<Home />} />
        </RequireAuth>
      ),
    },
    {
      path: "/new-post",
      element: (
        <RequireAuth>
          <Layout children={<NewPostPage />} />
        </RequireAuth>
      ),
    },
    {
      path: "/posts/:postId",
      element: (
        <RequireAuth>
          <Layout children={<Post />} />
        </RequireAuth>
      ),
    },
    {
      path: "/library",

      element: (
        <RequireAuth>
          <Layout children={<Library />} />
        </RequireAuth>
      ),
    },
    {
      path: "/browse",
      element: (
        <RequireAuth>
          <Layout children={<Browse />} />
        </RequireAuth>
      ),
    },
    {
      path: "/restaurant/:id",
      element: (
        <RequireAuth>
          <Layout children={<RestaurantPage />} />
        </RequireAuth>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/home" />,
    },
  ]);

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
