"use client";
import { MenuCategoriesItems } from "@/lib/MenuCategories";
import { useState } from "react";

export default function MenuCategories() {
  const [selectedCategory, setSelectedCategory] = useState("popular");
  return (
    <section className="my-10">
      <div className="container mx-auto px-6">
        <div className="menu-content bg-white text-black rounded-t-[14px]">
          <h2 className="font-semibold text-[24px] leading-8.5 tracking-[0%] pl-4 pt-4">
            Menu Categories
          </h2>
          <div className="categories-list mt-6 flex flex-col space-y-1 pb-2">
            {MenuCategoriesItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedCategory(item.name);
                  }}
                  className={`text-[24px] leading-8.5 tracking-[0%] font-medium py-2 px-6 capitalize text-left cursor-pointer hover:bg-[#FFE1C4] ${selectedCategory === item.name ? "bg-[#FFE1C4] border-l-4 border-l-[#FF7A18]" : ""}`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
