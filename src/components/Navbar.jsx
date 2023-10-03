import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-6 bg-gray-300 shadow-md">
      <div className="align-element flex justify-between items-center">
        <h1 className="text-3xl">Articles</h1>
        <div className="flex gap-5">
          <NavLink className="text-xl" to="/">Home</NavLink>
          <NavLink className="text-xl" to="/About">About</NavLink>
          <NavLink className="text-xl" to="/Contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
