export default function SkeletonCard() {
  return (
    <div className="animate-pulse grid grid-rows-4 content-center px-8 pt-8 outline outline-1 outline-gray-600 rounded-lg w-80 h-[416px]">
      <div className="w-full h-28 bg-gray-600 mb-10" />
      <div className="w-48 h-8 my-8 bg-gray-600 rounded-md" />
      <div className="flex flex-col items-center justify-start w-full">
        <div className="w-full h-5 rounded-md bg-gray-600" />
        <div className="w-full h-8 my-4 rounded-md bg-gray-600" />
      </div>
      <div className="w-full h-14 bg-gray-600 rounded-md " />
    </div>
  );
}
