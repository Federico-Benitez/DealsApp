"use client";

import { useDealsContext } from "@/context/DealsContext";
import React from "react";

export default function TotalPriceBanner() {
  const { price, clearItems } = useDealsContext();

  if (!price) return null;

  return (
    <div className="py-6 bg-gradient-to-r from-orange-300 from-1%  via-rose-500 via-20% to-fuchsia-800 to-90% sticky bottom-0 flex justify-center align-middle">
      <div className="flex justify-center">
        <h4 className="text-2xl pr-4">Precio Total</h4>
        <b className="text-2xl">${price.toFixed(2)}</b>
      </div>

      <button
        onClick={clearItems}
        className="ml-6 outline outline-1 outline-[#dadada50] rounded-md  px-5 "
      >
        <span>Limpiar carrito</span>
      </button>
    </div>
  );
}
