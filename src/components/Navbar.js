import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">UserApp</div>
      <div>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/add">Add User</Link>
      </div>
    </div>
  );
}

export default Navbar;