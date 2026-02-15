import Categories from "@/components/explorecomponent/Categories";
import MenuCategories from "@/components/explorecomponent/Menu-categories";
import NavWrapper from "@/components/Wrapper/NavFooterWrapper";

export default function Explore() {
  return (
    <NavWrapper>
      <section className="explore-page relative text-white h-[90vh] flex flex-col justify-center">
        <div className="overlay absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6">
          <div className="explore-content relative ">
            <h1 className="font-bold text-[48px] leading-15.25 tracking-[0%]">
              Chucks Kitchen
            </h1>
            <p className="font-medium text-[24px] leading-8.5 tracking-[0%]">
              Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
            </p>
          </div>
        </div>
      </section>
      <MenuCategories />
      <Categories />
    </NavWrapper>
  );
}
