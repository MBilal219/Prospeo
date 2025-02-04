"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../../common/Wrapper";
import Logo from "../../common/Logo";
import Link from "next/link";
import Menu from "./Menu";
import { Button } from "@/components/ui/button";
import { FaBars, FaX } from "react-icons/fa6";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import clsx from "clsx";

type Props = {};

const Header = (props: Props) => {
  const width = useWindowWidth();
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (width >= 1024) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  }, [width]);
  return (
    <header className="z-50 w-full fixed lg:top-8 lg:bottom-auto bottom-8 top-auto font-coresans">
      <Wrapper>
        <div className="bg-white/80 backdrop-blur-md drop-shadow-md p-3 1.5xl:p-4 rounded-xl lg:rounded-lg xs:max-w-sm lg:max-w-full mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center justify-start md:min-w-56 col-span-1">
              <Link href={"/"}>
                <Logo height="35" />
              </Link>
            </div>
            <div className="col-span-1 lg:hidden flex justify-end items-center">
              <div onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <FaX /> : <FaBars />}
              </div>
            </div>

            <div
              className={clsx(
                "flex flex-col lg:flex-row w-full items-center justify-between col-span-2 lg:col-span-3 gap-8",
                "overflow-hidden transition-[max-height] duration-500 ease-in-out",
                openMenu ? "max-h-96 opacity-100" : "max-h-0 "
              )}
            >
              <Menu />
              <div className="flex justify-center items-center gap-2 2xl:text-lg">
                <Button variant="link" className="1.5xl:text-lg 2xl:text-xl ">
                  Login
                </Button>
                <Button
                  variant="destructive"
                  className="1.5xl:text-lg 2xl:text-xl 1.5xl:!px-10 1.5xl:!py-6 1.5xl:rounded-xl"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
