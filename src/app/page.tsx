import getDeals from "@/api/fetchDeals";

export default async function Home() {
  const deals = await getDeals();
  return (
    <main>
      <p>hola</p>
      {JSON.stringify(deals)}
    </main>
  );
}
