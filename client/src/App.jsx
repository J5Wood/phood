import "./App.css";
import { Header } from "./components/navbar/Header";
import { QueryClient, QueryClientProvider } from "react-query";
// import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  redirect,
  Outlet,
} from "react-router-dom";
import "./index.css";
import { LoginModule } from "./routes/login/LoginModule";
import { Browse } from "./routes/browse/Browse";
import { Home } from "./routes/home/Home";
import { NewPostPage } from "./routes/new-post/NewPostPage";
import { Post } from "./routes/post/Post";
import { Library } from "./routes/library/Library";
import { AuthConsumer } from "./actions/UserActions";
// import { isAuthorized } from "./actions/UserActions";
// import { AuthProvider } from "./actions/UserActions";

// *** authed coming back false, need to figure out why login and signup aren't keeping state
// *** Likely hard routing with location.href, should navigate
function RequireAuth({ children }) {
  const { authed } = AuthConsumer();
  debugger;

  return authed === true ? children : <Navigate to="/login" replace />;
}

function App() {
  const queryClient = new QueryClient();
  // const [authed, setAuthed] = useState(false);

  // const protectedRoutes = {
  //   home: true,
  //   library: true,
  //   home: true,
  //   home: true,
  //   home: true,
  //   home: true,
  // };

  // function RequireAuth({ authorized, children }) {
  //   console.log("authing");
  //   debugger;
  // const token = localStorage.token;
  // debugger;
  // if (!token) return <Navigate to="/login" />;
  // if (authorized) return children;
  // return <Navigate to="/login" />;
  // (async function checkAuth() {
  //   const isAuthed = await isAuthorized(token);
  //   is
  //   console.log("authing with token");
  //   if (isAuthed) return children;
  //   return <Navigate to="/login" />;
  // })();
  // }

  // useEffect(() => {
  //   RequireAuth();
  // }, []);

  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <AuthProvider />,
    //   children: [
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
    // {
    //   path: "/home",
    //   element: <RequireAuth authorized={authed} />,
    //   children: [
    //     {
    //       path: "/home",
    //       element: <Home />,
    //     },
    //   ],
    // },
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
    // {
    //   path: "*",
    //   element: <Home />,
    // },
    //   ],
    // },
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
