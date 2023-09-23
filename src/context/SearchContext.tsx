"use client";

import { Product } from "@/api/types";
import useDebounce from "@/utils/useDebounce";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface SearchContext {
  searchValue: string;
  isLoading: boolean;
  matchedItems: Product[];
  onChangeValue: (value: string) => void;
  clearSearch: () => void;
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
  const [isLoading, setIsLoading] = useState(false);
  const filterValue = useDebounce(searchValue, 300);

  const matchedItems = useMemo(() => {
    setIsLoading(false);
    if (!filterValue) return data;

    return data.filter((prod) =>
      prod.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filterValue, data]);

  const onChangeValue = useCallback(
    (value: string) => setSearchValue(value),
    []
  );

  const clearSearch = useCallback(() => {
    setIsLoading(true);
    setSearchValue("");
  }, []);

  const value = useMemo(
    () => ({
      searchValue,
      isLoading,
      matchedItems,
      onChangeValue,
      clearSearch,
    }),
    [searchValue, isLoading, onChangeValue, matchedItems, clearSearch]
  );

  useEffect(
    function setLoading() {
      if (searchValue) setIsLoading(true);
    },
    [searchValue]
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
