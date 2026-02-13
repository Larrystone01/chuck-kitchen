import { Disc } from "lucide-react";
import Link from "next/link";

export default function Prefooter() {
  return (
    <section className="pre-footer w-screen h-152.5 text-white flex items-center justify-center">
      <div className="overlay absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-6">
        <div className="pre-footer-content relative">
          <h2 className="font-extrabold text-[32px] md:text-[48px] tracking-[0%]">
            Introducing Our New Menu Additions!
          </h2>
          <p className="font-semibold text-[20px] md:text-[24px] max-w-175 leading-6 md:leading-8.5 tracking-[0%] mb-6">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <Link
            href="/explore"
            className="bg-[#FF7A1B] text-[16px] py-3.5 px-8 w-fit rounded-[10px]"
          >
            Discover what's new
          </Link>
        </div>
      </div>
    </section>
  );
}
