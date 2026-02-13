"use client";
import { ChefsSpecialItems } from "@/lib/Chefs-Special";
import Image from "next/image";
import useShowMore from "@/hooks/useShowMore";

export default function ChefsSpecial({ limit = 3 }: { limit?: number }) {
  const { showAll, shouldShow, onHandleToggle } = useShowMore({
    limit,
    items: ChefsSpecialItems,
  });
  return (
    <section className="chefs-special-section py-15 md:py-0 md:pb-40">
      <div className="container mx-auto px-6">
        <div className="chefs-special-container">
          <h2 className="text-[32px] font-bold text-center">Chef's Specials</h2>
          <div className="specials-grid mt-10 grid md:grid-cols-3 gap-6">
            {ChefsSpecialItems.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className={`shadow-lg rounded-b-[14px] ${!showAll && i >= limit ? "hidden sm:block" : ""}`}
                >
                  <div className="img-container relative w-full h-55.5">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover rounded-t-[14px]"
                    />
                  </div>
                  <div className="item-details px-4 pt-6 pb-5">
                    <h3 className="font-semibold text-[24px] tracking-0">
                      {item.name}
                    </h3>
                    <p className="text-[16px] font-medium leading-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="price-cart px-4 flex justify-between items-center pb-10">
                    <p className="font-medium text-[#FF7A18] text-[16px]">
                      ₦{item.price}
                    </p>
                    <button className="bg-[#FF7A18] text-white rounded-[10px] py-2 px-5 cursor-pointer">
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {shouldShow && (
            <button
              onClick={onHandleToggle}
              className="text-blue-600 py-3.5 px-8 w-fit block sm:hidden mx-auto mt-10"
            >
              {showAll ? "View Less Specials" : "View All Specials"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
