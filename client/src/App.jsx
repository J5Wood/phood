import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
