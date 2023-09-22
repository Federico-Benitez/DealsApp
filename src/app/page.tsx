import getDeals from "@/api/fetchDeals";
import Card from "@/components/card";

export default async function Home() {
  const deals = await getDeals();
  return (
    <main className="flex justify-center">
      <ul className="grid gap-4 grid-cols-3 max-w-4xl">
        {deals.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </ul>
    </main>
  );
}
