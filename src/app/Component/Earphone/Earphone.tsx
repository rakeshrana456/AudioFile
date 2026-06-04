import Image from "next/image";
export default function Earphone() {
  return (
    <section className="py-16">
  <div className="container">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="rounded-lg overflow-hidden">
      <Image
        src="/Earphone/earphone.png"
        alt="YX1 Earphones"
        width={640}
        height={420}
        className="max-w-135 max-h-80 object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
      />
    </div>

   
    <div className="bg-gray-300 rounded-lg flex flex-col items-center justify-center min-h-[320px]">
      <h2 className="text-2xl text-black font-bold uppercase mb-8">
        YX1 Earphones
      </h2>

      <button className="border text-black border-black px-6 py-3 text-sm uppercase">
        See Product
      </button>
    </div>
  </div>
</div>
</section>
  );
}