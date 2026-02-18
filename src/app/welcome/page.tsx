import Footer from "@/components/Wrapper/Footer";
import { Utensils } from "lucide-react";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <main>
      <section className="sign-in-section h-full w-screen flex">
        <div className="bg-image md:min-h-screen relative md:w-1/2">
          <Image
            src={"/images/sign-image.png"}
            fill
            alt="Sign-In Image"
            className="object-cover"
          />
        </div>
        <div className="sign-in-details flex flex-col gap-15 md:w-1/2 bg-white px-6 md:px-22 py-5">
          <div className="logo-heading flex justify-between items-center w-full">
            <h2 className="logo">
              Chucks kitchen
            </h2>
            <div className="sign-btn">
              <button className="border border-[#1E88E5] text-[#1E88E5] px-8 py-2 rounded-[10px] font-semibold text-[16px] leading-6">
                Sign In
              </button>
            </div>
          </div>
          <div className="details flex flex-col gap-10">
            <h1 className="capitalize font-bold text-[32px] leading-10.5">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="font-medium text-[16px] leading-6">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
            <div className="little-details flex flex-wrap gap-8">
              <div className="capitalize flex items-center bg-[#F3F4F6] md:bg-transparent py-2 px-4 md:px-0 md:py-0 rounded-[10px] w-full md:w-fit">
                <span className="bg-[#FFE1C4] size-11 flex items-center justify-center rounded-[10px] mr-2">
                  <Utensils color="#FF7A18" />
                </span>
                <p className="font-medium text-[16px] leading-6">
                  freshly prepared
                </p>
              </div>
              <div className="capitalize flex items-center bg-[#F3F4F6] md:bg-transparent py-2 px-4 md:px-0 md:py-0 rounded-[10px] w-full md:w-fit">
                <span className="bg-[#FFE1C4] size-11 flex items-center justify-center rounded-[10px] mr-2">
                  <Utensils color="#FF7A18" />
                </span>
                <p className="font-medium text-[16px] leading-6">
                  support local business
                </p>
              </div>
              <div className="capitalize flex items-center bg-[#F3F4F6] md:bg-transparent py-2 px-4 md:px-0 md:py-0 rounded-[10px] w-full md:w-fit">
                <span className="bg-[#FFE1C4] size-11 flex items-center justify-center rounded-[10px] mr-2">
                  <Utensils color="#FF7A18" />
                </span>
                <p className="font-medium text-[16px] leading-6">
                  fast & reliable delivery
                </p>
              </div>
            </div>
            <div className="buttons flex flex-col gap-10">
              <button className="bg-[#FF7A18] text-white w-full py-4.5 capitalize rounded-[10px] font-semibold text-[16px] leading-6">
                start your order
              </button>
              <button className="bg-white text-[#1E88E5] border border-[#1E88E5] w-full py-4.5 capitalize rounded-[10px] font-semibold text-[16px] leading-6">
                learn more about us
              </button>
            </div>
          </div>
          <div className="footer-like flex gap-5 justify-center items-center border-t border-t-[#F3F4F6] pt-5">
            <p className="capitalize font-medium text-[14px] leading-5">
              &copy; {new Date().getFullYear()} chucks kitchen .
            </p>
            <p className="capitalize font-medium text-[14px] leading-5 text-[#1E88E5]">
              privacy policy
            </p>
            <p className="capitalize font-medium text-[14px] leading-5 text-[#1E88E5]">
              term of service
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
