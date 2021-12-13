import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Recycling Tracker</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/getRecyclables">Get</Link>
        <Link to="/postRecyclables">Post</Link>
        <Link to="/putRecyclables">Put</Link>
        <Link to="/deleteRecyclables">Delete</Link>
      </div>
    </nav>
  );
};

export default Navbar;
