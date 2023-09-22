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
    <footer className="flex justify-center py-5 items-center">
      <h1 className="text-2xl mr-10">Deals</h1>

      <nav>
        {links.map((link, i) => (
          <>
            {i > 0 && <span>|</span>}
            <a className="px-1" key={link}>
              {link}
            </a>
          </>
        ))}
      </nav>
    </footer>
  );
}
