import { Navigate, Outlet } from "react-router";

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");

  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
