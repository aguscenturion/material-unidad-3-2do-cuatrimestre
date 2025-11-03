import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="bg-blue-200 p-2 text-dark w-full flex justify-between">
      <Link to="/home" className="mr-4 hover:text-blue-800">
        Home
      </Link>
      <Link to="/about" className="mr-4">
        Logout
      </Link>
    </nav>
  );
};
