import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

type NavWrapperProps = {
  children: ReactNode;
};

export default function NavWrapper({ children }: NavWrapperProps) {
  return (
    <>
      <Navbar />
      <main className="pt-22">{children}</main>
      <Footer />
    </>
  );
}
