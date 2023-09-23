"use client";

import { useSearchContext } from "@/context/SearchContext";

export default function NoResultsMessage() {
  const { searchValue, clearSearch } = useSearchContext();

  return (
    <div className="h-128 grid justify-items-center ">
      <h3 className="text-7xl text-center max-w-6xl">
        {`No se encontraron resultados para '${searchValue}'`}
      </h3>
      <button
        onClick={clearSearch}
        className="border border-gray-600 rounded-lg p-6 h-24 w-fit"
      >
        <p className="text-2xl">Ver todos los productos</p>
      </button>
    </div>
  );
}
