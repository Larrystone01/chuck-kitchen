import { Search } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative hero-section h-screen text-white w-screen">
      <div className="container mx-auto px-6">
        <div className="content-container flex flex-col justify-center gap-y-8 h-screen">
          <h1 className="font-bold text-[48px] max-w-205.5 leading-14">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="font-bold text-[32px]">
            Handcrafted with passion, delivered with care.
          </p>
          <Link href="/explore" className="bg-[#FF7A1B] py-3.5 px-8 w-fit">
            Discover What's New
          </Link>
          <div className="searchbar-container absolute left-1/2 -translate-x-1/2 -bottom-6">
            <div className="searchbar bg-white px-3 flex gap-4 py-3 rounded-lg md:w-267.5 w-screen items-center shadow-lg mx-3 md:mx-0">
              <Search color="black" />
              <input
                type="text"
                className="bg-white outline-none text-black placeholder:text-[12px] placeholder:text-black w-full"
                placeholder="What are you craving for today?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
