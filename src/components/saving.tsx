/**
 * Component for display saving value
 */
export default function Saving({ value }: { value: string }) {
  const numberValue = Math.floor(Number(value));

  return (
    <div className="relative w-full">
      <span className="flex justify-center absolute right-3 -top-4 items-center bg-red-600 h-16 w-16 rounded-full text-xs font-bold">
        {numberValue}%off
      </span>
    </div>
  );
}
