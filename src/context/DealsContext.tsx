"use client";

import { Product } from "@/api/types";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface DealsContext {
  price: number;
  items: { id: Product["id"]; price: string }[];
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
}
const DealsContext = createContext<DealsContext | null>(null);

export function DealsProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<DealsContext["items"]>([]);

  const price = useMemo(
    () => items.reduce((prev, curr) => prev + Number(curr.price), 0),
    [items]
  );

  const addItem = useCallback((data: Product) => {
    setItems((oldItems) => [
      ...oldItems,
      { id: data.id, price: data.salePrice },
    ]);
  }, []);

  const removeItem = useCallback((data: Product) => {
    setItems((oldItems) => {
      return oldItems.filter((item) => item.id !== data.id);
    });
  }, []);

  const value = useMemo(
    () => ({
      price,
      items,
      addItem,
      removeItem,
    }),
    [price, items, addItem, removeItem]
  );

  return (
    <DealsContext.Provider value={value}>{children}</DealsContext.Provider>
  );
}

export function useDealsContext() {
  const context = useContext(DealsContext);

  if (!context) throw new Error("Deals Provider must be used");

  return context;
}
