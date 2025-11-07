import { Navigate, Outlet } from "react-router";

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem("token");

  return !isLogged ? <Outlet /> : <Navigate to="/home" />;
};
