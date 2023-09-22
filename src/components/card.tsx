import { Deals } from "@/api/types";
import Image from "next/image";
import Saving from "./saving";

export default function Card({ data }: { data: Deals }) {
  console.log(data);
  return (
    <li className="flex flex-col items-center pt-14 pb-8 border rounded border-pink-800 max-w-xs">
      <Saving value={data.savings} />
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
