import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Event Werkbook</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Change">Change</Link>
        <Link to="/Click">Click</Link>
        <Link to="/Keypress">Keypress</Link>
        <Link to="/Mousemove">Mousemove</Link>
        <Link to="/Submit">Submit</Link>
      </div>
    </nav>
  );
};

export default Navbar;
