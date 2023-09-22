import { Deals } from "@/api/types";
import Image from "next/image";

export default function Card({ data }: { data: Deals }) {
  return (
    <li className="flex flex-col items-center p-4 border rounded border-red-500 max-w-xs">
      <Image
        src={data.thumb}
        alt={`${data.title} image`}
        width={200}
        height={300}
      />
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
