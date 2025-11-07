import { Navigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem("token");

  return isLogged ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
