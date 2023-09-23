interface Props {
  onClick: () => void;
  isSelected: boolean;
  children: React.ReactNode;
}

import React, { useState } from "react";

const text = { add: "Añadir producto", remove: "Quitar producto" };

export default function Button({ onClick, isSelected, children }: Props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      className="flex justify-center mt-2 items-center h-min py-4 bg-gradient-to-r from-orange-300 from-1%  via-rose-500 via-20% to-fuchsia-800 to-90% rounded-lg text-xl"
    >
      {isHover ? (isSelected ? text.remove : text.add) : children}
    </button>
  );
}
