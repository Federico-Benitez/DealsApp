import { Deals } from "@/api/types";
import Image from "next/image";
import Saving from "./saving";
import Rating from "./rating";

export default function Card({ data }: { data: Deals }) {
  return (
    <li className="grid grid-rows-4 px-8 py-6 hover:outline rounded-lg hover:outline-pink-800 max-w-xs ">
      <div>
        <Saving value={data.savings} />
        <Image
          src={data.thumb}
          alt={`${data.title} image`}
          width={240}
          height={300}
        />
      </div>
      <span className="text-xl font-bold text-left py-4">{data.title}</span>

      <Rating value={data.steamRatingPercent} />
      <button className="bg-pink-800 rounded-lg">
        <p className="line-through">{data.normalPrice}</p>
        <p>{data.salePrice}</p>
      </button>
    </li>
  );
}
