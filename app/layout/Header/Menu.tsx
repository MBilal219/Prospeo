import Link from "next/link";
import React from "react";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="mt-8 lg:mt-0">
      <ul className="list-none grid grid-cols-3 lg:flex lg:items-center lg:justify-center gap-x-2.5 lg:gap-x-5 gap-y-5 2xl:text-lg">
        <li className="flex items-center justify-center">
          <Link href={"/"} className="text-center">
            Platform
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <Link href={"/"} className="text-center">
            Our Data
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <Link href={"/"} className="text-center">
            Why Prospeo
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <Link href={"/"} className="text-center">
            Resources
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <Link href={"/"} className="text-center">
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
