import Image from "next/image";

export default function Rating({ value }: { value: string }) {
  const rate = calculateRate(value);

  return (
    <div className="self-end">
      <p className="font-light text-lg text-center">Steam Review</p>
      <div className="grid grid-cols-5">
        {[...Array(rate)].map((_, i) => (
          <Image key={i} src={"/star.svg"} alt="rate" width={50} height={50} />
        ))}

        {[...Array(5 - rate)].map((_, i) => (
          <Image
            key={i}
            src={"/star-empty.svg"}
            alt="rate"
            width={50}
            height={50}
          />
        ))}
      </div>
    </div>
  );
}

function calculateRate(value: string) {
  //fix this
  const rate = Math.floor((Number(value) - 1) / 20) + 1;
  return rate;
}
