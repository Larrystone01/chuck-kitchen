"use client";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import Footer from "@/components/Wrapper/Footer";

export default function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main>
      <section className="flex h-fit w-screen">
        <div className="image-side relative login w-1/2 text-white hidden md:block">
          <div className="overlay absolute inset-0 bg-[#FF7A18B2]/70"></div>
          <div className="content relative flex flex-col items-center justify-center h-full">
            <h1 className="font-bold text-[48px] leading-15.5">
              Chuks Kitchen
            </h1>
            <p className="text-[24px] font-medium leading-8.5 md:max-w-101 text-center mt-5">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>
        <div className="content flex flex-col justify-center md:justify-start w-full md:w-1/2 h-screen md:h-fit md:px-20 px-6 md:py-10">
          <div>
            <div className="logo uppercase text-center">Chucks kitchen</div>
          </div>
          <h3 className="capitalize font-medium text-[24px] leading-8.5 text-center mb-10">
            Login your account
          </h3>
          <div className="input-fields mb-5">
            <label htmlFor="email">Email or phone number</label>
            <div className="input flex border border-gray-300 w-full rounded-lg mt-2 px-4 py-3">
              <Mail />
              <input
                type="text"
                name="email"
                id="email"
                className="outline-none w-full pl-2"
                placeholder="name@gmail.com"
              />
            </div>
          </div>
          <div className="input-fields">
            <label htmlFor="password">Password</label>
            <div className="input flex border border-gray-300 w-full rounded-lg mt-2 px-4 py-3">
              <LockKeyhole />
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                id="password"
                className="outline-none w-full pl-2"
                placeholder="****"
              />
              {isVisible ? (
                <Eye onClick={() => setIsVisible(false)} />
              ) : (
                <EyeOff onClick={() => setIsVisible(true)} />
              )}
            </div>
          </div>
          <button className="text-right mt-5 cursor-pointer text-blue-500 capitalize">
            Forgot password?
          </button>
          <button className="mt-5 cursor-pointer text-white bg-[#FF7A18] capitalize py-4.5 rounded-[10px] font-semibold text-[24px] leading-6">
            continue
          </button>
          <p className="text-center mt-4">Or continue with</p>
          <div className="continue-with-buttons flex flex-col gap-5 mt-4">
            <button className="flex gap-2 border border-[#BDBDBD] py-3 rounded-[10px] w-full items-center justify-center bg-white cursor-pointer">
              <FcGoogle size={25} /> <span>Continue with Google</span>
            </button>
            <button className="flex gap-2 border border-[#BDBDBD] py-3 rounded-[10px] w-full items-center justify-center bg-white cursor-pointer">
              <SiApple size={25} /> <span>Continue with Apple</span>
            </button>
          </div>
          <p className="text-center mt-4 text-[12px] text-[#616161]">
            Don't have an account?{" "}
            <span className="text-blue-500 cursor-pointer capitalize">
              Create an account
            </span>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
