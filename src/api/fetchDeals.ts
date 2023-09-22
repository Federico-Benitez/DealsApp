import { Deals, DealsResponse, SteamRatingText } from "./types";

const url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

export default async function getDeals() {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Unable to fetch deals");

  const data = await res.json();

  return adapatDeals(data);
}

function adapatDeals(data: DealsResponse[]): Array<Deals> {
  return data.map((deal) => ({
    id: deal["dealID"] ?? "",
    savings: deal["savings"] ?? "",
    thumb: deal["thumb"] ?? "",
    title: deal["title"] ?? "no-title",
    steamRatingPercent:
      deal["steamRatingPercent"] ?? SteamRatingText.VeryPositive,
    normalPrice: deal["normalPrice"] ?? 0,
    salePrice: deal["salePrice"] ?? 0,
  }));
}
