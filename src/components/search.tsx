"use client";

import { useSearchContext } from "@/context/SearchContext";

export default function Search() {
  const { searchValue, onChangeValue } = useSearchContext();
  return (
    <div className="flex justify-center mb-10 ">
      <input
        type="text"
        placeholder="Buscar producto"
        value={searchValue}
        onChange={(e) => onChangeValue(e.target.value)}
        className=" text-sm font-medium bg-gray-800 px-14 w-full h-14 rounded-xl"
      />
    </div>
  );
}
