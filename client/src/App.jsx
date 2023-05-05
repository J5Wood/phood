import "./App.css";
import { Header } from "./components/navbar/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import { LoginModule } from "./routes/login/LoginModule";
import { Browse } from "./routes/browse/Browse";
import { Home } from "./routes/home/Home";
import { NewPostPage } from "./routes/new-post/NewPostPage";
import { Post } from "./routes/post/Post";
import { Library } from "./routes/library/Library";
import { isAuthorized } from "./actions/UserActions";

function App() {
  const queryClient = new QueryClient();

  // *** Auths with no token
  function RequireAuth() {
    console.log("authing");
    const token = localStorage.token;
    if (!token) return <Navigate to="/login" />;
    (async function checkAuth() {
      const authed = await isAuthorized(token);
      console.log("authing with token");
      if (!authed) return <Navigate to="/login" />;
    })();
  }

  useEffect(() => {
    RequireAuth();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginModule />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/new-post",
      element: <NewPostPage />,
    },
    {
      path: "/posts/:postId",
      element: <Post />,
    },
    {
      path: "/library",
      element: <Library />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Header />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
