// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    background: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease-in-out",
  };
  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0 }}>My App</h1>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li>
          <Link to="/" style={linkStyle} >
            Home
          </Link>
        </li>
        <li>
          <Link to="/TowerOfHanoi" style={linkStyle} >
            Tower Of Hanoi
          </Link>
        </li>
        <li>
          <Link to="/TicTacToe" style={linkStyle} >
            Tic Tac Toe
          </Link>
        </li>
        <li>
          <Link to="/RockPaperScissor" style={linkStyle} >
            Rock Paper Scissors
          </Link>
        </li>
        <li>
          <Link to="/AddFriends" style={linkStyle} >
            Add Friends
          </Link>
        </li>
        <li>
          <Link to="/Friends" style={linkStyle} >
            Friends List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
