import getDeals from "@/api/fetchDeals";
import Card from "@/components/card";

export default async function Home() {
  const deals = await getDeals();
  return (
    <main>
      <ul>
        {deals.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </ul>
    </main>
  );
}
