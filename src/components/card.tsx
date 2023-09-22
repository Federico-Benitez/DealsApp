import { Deals } from "@/api/types";

export default function Card({ data }: { data: Deals }) {
  return (
    <li className="p-4 border border-red-500">
      <span>{data.title}</span>
      <p>Steam Review</p>
      <div>{data.steamRatingPercent}</div>
      <button>
        <p className="line-through">{data.normalPrice}</p>
        <p>{data.salePrice}</p>
      </button>
    </li>
  );
}
