import React from "react";
import "../homeCss/Header.css";

const Headerr = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Eduvi Online Book Shop</h1>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Headerr;
