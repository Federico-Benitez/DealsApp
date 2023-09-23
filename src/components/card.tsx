"use client";

import { useDealsContext } from "@/context/DealsContext";
import { Product } from "@/api/types";
import Image from "next/image";
import Saving from "./saving";
import Rating from "./rating";
import { useMemo } from "react";

export default function Card({ data }: { data: Product }) {
  const { items, addItem, removeItem } = useDealsContext();

  const isSelected = useMemo(
    () => items.find((item) => item.id === data.id),
    [items, data]
  );

  const handleSelect = () => {
    if (!isSelected) return addItem(data);
    return removeItem(data);
  };

  return (
    <li
      className={`grid grid-rows-4 px-8 py-6 hover:outline rounded-lg hover:outline-gray-500 max-w-xs ${
        isSelected ? "outline outline-pink-800 bg-slate-800" : ""
      }`}
    >
      <div>
        <Saving value={data.savings} />
        <Image
          src={data.thumb}
          alt={`${data.title} image`}
          width={240}
          height={300}
        />
      </div>
      <span className="text-xl font-bold text-left py-4">{data.title}</span>

      <Rating value={data.steamRatingPercent} />
      <button className="bg-pink-800 rounded-lg" onClick={handleSelect}>
        <p className="line-through">{data.normalPrice}</p>
        <p>{data.salePrice}</p>
      </button>
    </li>
  );
}
