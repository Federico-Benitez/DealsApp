"use client";

import { useSearchContext } from "@/context/SearchContext";

export default function NoResultsMessage() {
  const { searchValue, clearSearch } = useSearchContext();

  return (
    <div className="h-128 grid justify-items-center">
      <h3 className="text-xl sm:text-2xl md:text-5xl text-center max-w-xs lg:max-w-full">
        {`No se encontraron resultados para '${searchValue}'`}
      </h3>
      <button
        onClick={clearSearch}
        className="border border-gray-600 rounded-lg px-2 md:p-6 h-14 md:h-24 w-fit"
      >
        <p className="md:text-2xl">Ver todos los productos</p>
      </button>
    </div>
  );
}
