"use client";
import Image from "next/image";
import { Plus } from "lucide-react";
import Link from "next/link";

type CardProps = {
  items: any;
  buttonText?: string;
  index: number;
  limit: number;
  showAll: any;
  href: string;
};

export default function Card({
  items,
  buttonText,
  index,
  limit,
  showAll,
  href,
}: CardProps) {
  return (
    <Link
      href={`/${href}`}
      key={items.id}
      className={`shadow-lg rounded-b-[14px] ${!showAll && index >= limit ? "hidden sm:block" : ""}`}
    >
      <div className="img-container relative w-full h-55.5">
        <Image
          src={items.img}
          alt={items.name}
          fill
          className="object-cover rounded-t-[14px]"
        />
      </div>
      <div className="item-details px-4 pt-6 pb-5">
        <h3 className="font-semibold text-[24px] tracking-0">{items.name}</h3>
        <p className="text-[16px] font-medium leading-6">{items.description}</p>
      </div>
      <div className="price-cart px-4 flex justify-between items-center pb-10">
        <p className="font-medium text-[#FF7A18] text-[16px]">₦{items.price}</p>
        <button
          className={`bg-[#FF7A18] text-white cursor-pointer ${buttonText ? "rounded-[10px] py-2 px-5" : "rounded-full"}`}
        >
          {buttonText ? buttonText : <Plus size={20} />}
        </button>
      </div>
    </Link>
  );
}
