import ChefsSpecial from "@/components/homecomponent/ChefsSpecial";
import Hero from "@/components/homecomponent/Hero";
import PopularCategories from "@/components/homecomponent/PopularCategories";
import Prefooter from "@/components/homecomponent/Prefooter";
import NavWrapper from "@/components/Wrapper/NavFooterWrapper";

export default function Home() {
  return (
    <NavWrapper>
      <Hero />
      <PopularCategories />
      <ChefsSpecial />
      <Prefooter />
    </NavWrapper>
  );
}
