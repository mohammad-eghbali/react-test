import React from "react";

export default function Header({ title }) {
  return (
    <>
      <h1 data-testid="header-1" title="Header" className="header">
        {title}
      </h1>
      <h3 data-testid="header-2" className="header">
        Hello
      </h3>
    </>
  );
}
