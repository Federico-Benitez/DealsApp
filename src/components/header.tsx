import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between h-20 border-b-2 py-4 px-8 items-center">
      <h1>Deals</h1>
      <nav>
        <a className="px-5">Home</a>
        <a className="px-5">Browse</a>
      </nav>
    </div>
  );
}
