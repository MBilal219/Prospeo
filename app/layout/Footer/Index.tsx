import Logo from "@/app/common/Logo";
import Wrapper from "@/app/common/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const links = [
  { name: "Domain search", href: "/" },
  { name: "Email finder", href: "/" },
  { name: "Mobile finder", href: "/" },
  { name: "Email verifier", href: "/" },
  { name: "Export sales navigator", href: "/" },
];

const categories = ["Products", "Resources", "Others"];

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="md:px-4 py-4 min-h-64 relative bg-[#FFF9EF]">
      <Image
        src="/assets/images/footer-bg.png"
        alt="footer-bg"
        fill
        className="absolute object-cover object-center z-0"
      />
      <Wrapper className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="col-span-1">
            <div className="flex flex-col lg:items-start items-center justify-center gap-4">
              <Logo />
              <p className="text-center lg:text-left text-balance">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <div className="flex justify-start items-center gap-3 text-2xl">
                <Link href={"/"}>
                  <FaLinkedin />
                </Link>
                <Link href={"/"}>
                  <FaYoutube />
                </Link>
                <Link href={"/"}>
                  <FaInstagram />
                </Link>
                <Link href={"/"}>
                  <FaXTwitter />
                </Link>
                <Link href={"/"}>
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-8 sm:items-start sm:justify-between justify-center flex-col sm:flex-row lg:max-w-[90%] 1.5xl:max-w-[85%] w-full">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex flex-col items-start justify-center gap-6"
                  >
                    <strong className="tracking-wider text-lg">
                      {category}
                    </strong>
                    <ul className="list-none space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <Link href={link.href}>{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
