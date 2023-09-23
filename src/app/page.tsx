import getDeals from "@/api/fetchDeals";
import ProductList from "@/components/list";
import { SearchProvider } from "@/context/SearchContext";
import Image from "next/image";
import banner from "../../public/banner.jpeg";

export default async function Home() {
  const deals = await getDeals();
  return (
    <SearchProvider data={deals}>
      <div className="relative h-[100px] xs:h-[130px] sm:h-[190px] md:h-[230px] lg:h-[400px]">
        <Image
          src={banner}
          alt="banner"
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
      </div>
      <main className="flex justify-center py-10">
        <ProductList />
      </main>
    </SearchProvider>
  );
}
