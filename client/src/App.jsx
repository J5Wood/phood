import "./App.css";
import { Header } from "./components/navbar/Header";
import { QueryClient, QueryClientProvider } from "react-query";
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
import { AuthConsumer } from "./actions/UserActions";
import { useState } from "react";

// *** Require auth now working. Need to test edge cases and more routes.
// *** Can auth with any token! Nede to check validation
// *** May be hard load of routes in menu, getting quick loading flash

function RequireAuth({ children }) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { authed, isAuthorized } = AuthConsumer();

  if (authed) {
    return <>{children}</>;
  }
  if (checkingAuth) {
    checkForAuthorization(setCheckingAuth, isAuthorized);
    return <h2>Loading...</h2>;
  }
  return <Navigate to="/login" replace />;
}

async function checkForAuthorization(setCheckingAuth, isAuthorized) {
  if (!!localStorage.token) {
    await isAuthorized();
  }
  setCheckingAuth(false);
}

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginModule />,
    },
    {
      path: "/home",
      element: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
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
