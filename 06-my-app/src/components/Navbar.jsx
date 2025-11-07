import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="h-[5vh] bg-linear-to-br from-blue-300 to-blue-200 p-4 text-dark font-bold w-full flex justify-between">
      <div>
        <Link to="/home" className="mr-4 hover:text-blue-800">
          Home
        </Link>
        <Link to="/tasks" className="mr-4 hover:text-blue-800">
          Tasks
        </Link>
      </div>
      <div>
        <Link
          to="/about"
          className="mr-4 hover:text-blue-800"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};
