"use client";
import { PopularCategoriesItems } from "@/lib/PopularCategories";
import Image from "next/image";
import useShowMore from "@/hooks/useShowMore";

export default function PopularCategories() {
  const limit = 3;
  const { showAll, shouldShow, onHandleToggle } = useShowMore({
    limit,
    items: PopularCategoriesItems,
  });
  return (
    <section className="popular-categories-section py-20 md:py-30">
      <div className="container mx-auto px-6">
        <div className="categories-container">
          <h2 className="text-[32px] font-bold text-center">
            Popular Categories
          </h2>
          <div className="categories-grid mt-10 grid md:grid-cols-3 gap-6">
            {PopularCategoriesItems.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className={`rounded-b-[14px] shadow-lg ${!showAll && i >= limit ? "hidden sm:block" : ""}`}
                >
                  <div className="img-container relative w-full h-55.5">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover rounded-t-[14px]"
                    />
                  </div>
                  <p className="text-center text-[24px] font-bold mt-8 pb-26 capitalize">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
          {shouldShow && (
            <button
              onClick={onHandleToggle}
              className="text-blue-600 py-3.5 px-8 w-fit block sm:hidden mx-auto mt-10"
            >
              {showAll ? "View Less Categories" : "View All Categories"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
