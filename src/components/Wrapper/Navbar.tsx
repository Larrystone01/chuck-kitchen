"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/Nav-Items";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [NavbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className=" fixed w-screen py-4.5 md:px-12 px-6 bg-white z-50">
      <div className="nav-container container mx-auto px-6">
        <nav className="flex justify-between">
          <Link href="/" className="logo w-1/3">
            <Image src="/images/logo.png" alt="Logo" width={183} height={41} />
          </Link>
          <div
            className={`nav-links-login flex flex-col md:flex-row items-center md:w-2/3 px-4 md:px-0 pt-16 md:pt-0 inset-0 bg-white md:bg-none md:justify-between md:opacity-100 md:static md:translate-x-0 absolute transition-all duration-300 ease-in-out ${NavbarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <button
              onClick={() => setNavbarOpen(false)}
              className="close-btn absolute right-5 top-4 md:hidden"
            >
              <X />
            </button>
            <div className="nav-links flex flex-col md:flex-row gap-12">
              {navItems.map((item) => {
                return (
                  <Link
                    href={item.href}
                    className={`capitalize font-medium text-[16px] tracking-normal ${pathname === item.href ? "text-[#FF7A1B]" : ""} hover:text-[#FF7A1B] transition-colors duration-300`}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="login bg-[#FF7A18] text-white py-2 px-10 rounded-[10px] flex justify-center items-center mt-5 md:mt-0">
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div className="hamburger md:hidden">
            <button
              onClick={() => {
                console.log("clicked");
                setNavbarOpen(true);
              }}
            >
              <Menu />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
