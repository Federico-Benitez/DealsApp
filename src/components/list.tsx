"use client";

import Card from "./card";
import Search from "./search";
import { useSearchContext } from "@/context/SearchContext";
import NoResultsMessage from "./noResults";

export default function ProductList() {
  const { matchedItems } = useSearchContext();
  return (
    <div className="max-w-6xl">
      <Search />
      {!!matchedItems.length ? (
        <ul className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 max-w-6xl">
          {matchedItems.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </ul>
      ) : (
        <NoResultsMessage />
      )}
    </div>
  );
}
