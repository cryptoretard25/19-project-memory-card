import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Header() {
  return (
    <div className="header-wrapper">
      <h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/pokeball.png`}
          alt="pokeball"
        />
        <div>
          React <span style={{ color: "red" }}>Poké</span>
          <span>mon</span> Cards
        </div>
      </h2>
    </div>
  );
}

export default Header;