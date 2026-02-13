import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#62412E] py-10">
      <div className="container mx-auto px-6">
        <div className="footer-container">
          <div className="footer-content text-gray-200 grid md:grid-cols-4 space-y-10 md:space-y-0">
            <div className="logo-details">
              <h3 className="footer-logo text-[#FF7A18] text-[37px]">
                Chucks Kitchen
              </h3>
              <p className="description text-white text-[24px] leading-9 max-w-57.5">
                Bringing the authentic flavors of Nigerian home cooking to your
                table, with passion and care.
              </p>
            </div>
            <div className="footer-link">
              <h3 className="footer-headings text-[24px] mb-3 text-white">
                Quick Links
              </h3>
              <ul className="links leading-5 footer-body text-[12px] flex flex-col gap-4">
                <li>
                  <Link href="/" className="footer-body">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/explore">Explore</Link>
                </li>
                <li>
                  <Link href="/cart">My Order</Link>
                </li>
                <li>
                  <Link href="/">Account</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="contact-info leading-5">
              <h3 className="footer-headings text-[24px] mb-5 text-white">
                Contact Us
              </h3>
              <p className="footer-body text-[12px] mb-3">+234 801 234 5678</p>
              <p className="footer-body text-[12px] mb-3">
                hello@chuckskitchen.com
              </p>
              <p className="footer-body text-[12px]">
                123 Taste Blvd, Lagos, Nigeria
              </p>
            </div>
            <div className="socials footer-body text-[12px] leading-5 flex flex-col gap-4">
              <Link
                href="https://www.facebook.com/chuckskitchen"
                target="_blank"
              >
                Facebook
              </Link>
              <Link
                href="https://www.twitter.com/chuckskitchen"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/chuckskitchen"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/chuckskitchen"
                target="_blank"
              >
                Instagram
              </Link>
            </div>
          </div>
          <div className="rights flex justify-between mt-13 items-center">
            <p className="footer-body text-[12px] tracking-[0%] text-white">
              &copy; {new Date().getFullYear()} Lift Media. All rights reserved.
            </p>
            <button className="bg-[#0081FE] size-10 flex items-center justify-center rounded-full cursor-pointer">
              <ArrowUp color="white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
