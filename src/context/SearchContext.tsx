"use client";

import { Product } from "@/api/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface SearchContext {
  searchValue: string;
  matchedItems: Product[];
  onChangeValue: (value: string) => void;
}

const SearchContext = createContext<SearchContext | null>(null);

export function SearchProvider({
  children,
  data,
}: {
  children: ReactNode;
  data: Product[];
}) {
  const [searchValue, setSearchValue] = useState("");

  const matchedItems = useMemo(() => {
    if (!searchValue) return data;

    return data.filter((prod) =>
      prod.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, data]);

  const onChangeValue = useCallback(
    (value: string) => setSearchValue(value),
    []
  );

  const value = useMemo(
    () => ({
      searchValue,
      matchedItems,
      onChangeValue,
    }),
    [searchValue, onChangeValue, matchedItems]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) throw new Error("Search context must be present");

  return context;
}
