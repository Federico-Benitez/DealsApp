"use client";

import Card from "./card";
import Search from "./search";
import { useSearchContext } from "@/context/SearchContext";
import NoResultsMessage from "./noResults";
import SkeletonCard from "./skeleton-card";

export default function ProductList() {
  const { matchedItems, isLoading } = useSearchContext();

  const existResults = !isLoading && !!matchedItems.length;
  const noResultsFound = !isLoading && !matchedItems.length;

  return (
    <div className="max-w-6xl">
      <Search />
      {isLoading && <LoadingElements />}
      {existResults && (
        <ul className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 max-w-6xl">
          {matchedItems.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </ul>
      )}

      {noResultsFound && <NoResultsMessage />}
    </div>
  );
}

function LoadingElements() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 max-w-6xl h-full ">
      {[...Array(3)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
