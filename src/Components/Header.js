import React from "react";
import "./Header.css";
import PointDisplay from "./PointDisplay";

const Header = ({ points }) => {
  return (
    <header className="header">
      <h1 className="title">Video Player</h1>
      <PointDisplay points={points} />
    </header>
  );
};

export default Header;
