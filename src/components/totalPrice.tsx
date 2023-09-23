"use client";

import { useDealsContext } from "@/context/DealsContext";
import React from "react";

export default function TotalPriceBanner() {
  const { price } = useDealsContext();

  return (
    <div className="py-6 bg-orange-300 sticky bottom-0 flex justify-center align-middle">
      <h4 className="text-2xl pr-4 text-gray-600">Precio Total</h4>
      <b className="text-2xl text-gray-600">${price.toFixed(2)}</b>
    </div>
  );
}
