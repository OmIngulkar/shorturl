import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <main className="bg-purple-100 min-h-[92vh] flex items-center justify-center p-4 sm:p-6">
      <section className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-6xl py-12">
        {/* Text Section */}
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-sans text-purple-800 leading-tight">
            The Best <span className="text-purple-600">URL Shortener</span> in the Market
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md">
            We are the most straightforward and efficient URL Shortener in the world — simple, fast, and powerful.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto items-center justify-center md:justify-start'>
            <Link href="/shorten" className="w-full sm:w-auto">
              <button className='bg-purple-700 p-2 py-2 font-bold rounded-lg shadow-lg text-white hover:bg-purple-600 transition duration-300 w-full sm:w-auto text-lg'>
                🚀 Try Now
              </button>
            </Link>
            <Link href="/github" className="w-full sm:w-auto">
              <button className='shadow-lg bg-white border-2 border-purple-700 p-2 py-2 font-bold rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition duration-300 w-full sm:w-auto text-lg'>
                ⭐ GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-xs sm:max-w-sm h-60 sm:h-72 md:h-96 mx-auto mt-8 md:mt-0">
          <Image
            className="object-contain mix-blend-multiply" // Adjusted blend mode for better visibility
            alt={"vector image"}
            src={"/vector.png"}
            fill
            priority // Add priority if this image is above the fold for LCP
          />
        </div>
      </section>
    </main>
  );
}