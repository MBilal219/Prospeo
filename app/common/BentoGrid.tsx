import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ButtonIcon from "./svgs/ButtonIcon";

type Props = {};

const BentoGrid = (props: Props) => {
  return (
    <section className="mt-6">
      <h1 className="lg:text-5xl my-16 1.5xl:text-[68px] 2xl:text-7xl text-3xl font-coresans font-medium text-center text-balance">
        Find leads that respond
      </h1>
      <Wrapper>
        <div className="grid lg:grid-cols-3 grid-cols-1 ">
          <div className="col-span-1 min-h-96 rounded-xl bg-red-300 relative">
            <Image
              src={"/assets/images/grid1.png"}
              alt="grid 1"
              layout="responsive"
              height={460}
              width={360}
              // fill
              // className="object-cover"
            />
          </div>
          <div className="lg:col-span-2 col-span-1 min-h-80 rounded-xl bg-red-300 relative">
            <Image
              src={"/assets/images/grid2.png"}
              alt="grid 1"
              layout="responsive"
              height={460}
              width={798}
              // fill
              // className="object-cover"
            />
          </div>
          <div className="drop-shadow-md col-span-1 lg:col-span-3 lg:min-h-48 relative rounded-xl bg-gradient-to-r from-[#FFFBF3] to-[#FDEBCD] flex flex-col md:flex-row lg:p-6 p-4 items-center justify-between gap-6">
            <Image
              src="/assets/images/CTA.png"
              fill
              alt="precent Background"
              className="absolute rounded-[inherit] object-cover"
            />
            <div className="flex flex-col items-center md:items-start justify-center z-10 gap-4 md:gap-6">
              <h1 className="lg:text-5xl 1.5xl:text-[56px] text-3xl md:text-4xl font-montreal font-medium text-center  md:text-left text-balance">
                You are a click
                <br />
                away from Growth
              </h1>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                <Button
                  variant={"destructive"}
                  // size="lg"
                  className="1.5xl:text-lg 2xl:text-xl"
                >
                  <ButtonIcon /> Get Started for free
                </Button>
                <Button
                  variant={"outline"}
                  // size="lg"
                  className="1.5xl:text-lg w-full lg:w-auto 2xl:text-xl bg-transparent !border-1 !border-[#2E0708] hover:bg-white/50"
                >
                  Contact Sales Team
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="h-36  w-[100px] relative">
                <Image
                  src="/assets/images/badge1.png"
                  alt="badge"
                  fill
                  className="absolute object-contain"
                />
              </div>
              <div className="h-32  w-[100px] relative">
                <Image
                  src="/assets/images/badge2.png"
                  alt="badge"
                  fill
                  className="absolute object-contain"
                />
              </div>
              <div className="h-36  w-[100px] relative">
                <Image
                  src="/assets/images/badge3.png"
                  alt="badge"
                  fill
                  className="absolute object-contain"
                />
              </div>
              <div className="h-36  w-[100px] relative">
                <Image
                  src="/assets/images/badge2.png"
                  alt="badge"
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BentoGrid;
