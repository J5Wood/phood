import { Header } from "../navbar/Header";

export function Layout({ children }) {
  return (
    <div className="layout-component">
      <Header />
      {children}
    </div>
  );
}
