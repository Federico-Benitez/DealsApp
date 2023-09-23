import getDeals from "@/api/fetchDeals";
import ProductList from "@/components/list";
import { SearchProvider } from "@/context/SearchContext";

export default async function Home() {
  const deals = await getDeals();
  return (
    <SearchProvider data={deals}>
      <main className="flex justify-center py-10">
        <ProductList />
      </main>
    </SearchProvider>
  );
}
