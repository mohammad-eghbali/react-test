import React from "react";

export default function Header({ title }) {
  return (
    <>
      <h2 data-testid="header-1" title="Header" className="header">
        Header
        {/* {title} hello */}
      </h2>
      <h3 data-testid="header-2" className="header">
        hello
      </h3>
    </>
  );
}
