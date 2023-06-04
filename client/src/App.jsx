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

// *** Require auth now working. Need to test edge cases and more routes.
// *** May have hard loading routes from menu, getting quick loading flash

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
      element: <Layout children={<NewPostPage />} />,
    },
    {
      path: "/posts/:postId",
      element: <Layout children={<Post />} />,
    },
    {
      path: "/library",
      element: <Layout children={<Library />} />,
    },
    {
      path: "/browse",
      element: <Layout children={<Browse />} />,
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
