import React from "react";

function Header() {
        const now = new Date();
  return (
    <header>
      <h3>Шапка</h3>
      <span>время сейчас : { now.toLocaleTimeString() }</span>
    </header>
  );
}

export default Header;