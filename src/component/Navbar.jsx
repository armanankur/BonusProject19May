import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav style={{ height: "10vh", width: "100vw" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            listStyle: "none"
          }}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
