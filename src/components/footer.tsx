import React from "react";

const links = [
  "Acerca de Valve",
  "Steamworks",
  "Empleo",
  "Distribución de Steam",
  "Tarjetas regalo",
  "Steam",
  "@steam",
];

export default function Footer() {
  return (
    <footer className="flex justify-center py-5 lg:items-center border-t-2">
      <h1 className="text-2xl mr-10">Deals</h1>

      <nav className="grid lg:grid-flow-col">
        {links.map((link, i) => (
          <div key={i} className="py-2 lg:py-0">
            {i > 0 && <span className="hidden lg:inline">|</span>}
            <a className="px-1" key={link}>
              {link}
            </a>
          </div>
        ))}
      </nav>
    </footer>
  );
}
