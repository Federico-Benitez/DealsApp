"use client";

import { useDealsContext } from "@/context/DealsContext";
import { Product } from "@/api/types";
import Image from "next/image";
import Saving from "./saving";
import Rating from "./rating";
import { useMemo } from "react";
import Button from "./button";

export default function Card({ data }: { data: Product }) {
  const { items, addItem, removeItem } = useDealsContext();

  const isSelected = useMemo(
    () => !!items.find((item) => item.id === data.id),
    [items, data]
  );

  const handleSelect = () => {
    if (!isSelected) return addItem(data);
    return removeItem(data);
  };

  return (
    <li
      className={`grid grid-rows-4 px-8 pt-8 outline rounded-lg w-80 ${
        isSelected ? "outline-pink-800" : "outline-gray-900"
      }`}
    >
      <div>
        <Saving value={data.savings} />
        <Image
          src={data.thumb}
          alt={`${data.title} image`}
          width={320}
          height={200}
        />
      </div>
      <span className="text-xl font-bold text-left py-4">{data.title}</span>

      <Rating value={data.steamRatingPercent} />
      {/* Card Button */}
      <Button onClick={handleSelect} isSelected={isSelected}>
        <p className="line-through font-bold mr-2">${data.normalPrice}</p>
        <p className="font-bold text-xl">${data.salePrice}</p>
      </Button>
    </li>
  );
}
