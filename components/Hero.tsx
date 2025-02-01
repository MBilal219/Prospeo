import Wrapper from "@/app/common/Wrapper";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ButtonIcon from "@/app/common/svgs/ButtonIcon";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full p-0.5 lg:p-4 xl:p-5">
      <div className="relative w-full h-[450px] sm:h-[480px] md:h-[600px] lg:h-[700px] rounded-xl mx-auto 2xl:max-w-[1600px]">
        {/* Background Image */}
        <Image
          src="/assets/images/hero_bg.png"
          fill
          alt="Hero Background"
          className="absolute -z-10 rounded-[inherit] object-cover"
        />

        {/* Hero Content */}
        <Wrapper>
          <div className="pt-12 lg:pt-32 flex flex-col gap-6 items-center justify-center">
            <h1 className="lg:text-6xl text-3xl font-coresans font-medium text-center text-balance">
              Find leads that respond
            </h1>
            <p className="font-coresans text-center text-sm text-balance font-normal lg:text-lg">
              Accelerate growth with verified emails and mobile numbers - 250M
              leads
              <br />
              and 30M companies at your fingertips.
            </p>

            <div className="lg:w-72 w-56">
              <Image
                src={"/assets/images/rating.png"}
                alt="rating"
                width={400}
                height={40}
                layout="responsive"
              />
            </div>
            <Button variant={"destructive"} size="lg">
              <ButtonIcon /> Get Started for free
            </Button>
          </div>
        </Wrapper>

        {/* Floating Image Positioned at the Bottom */}
        <Wrapper className="absolute left-1/2 md:h-[600px] -translate-x-1/2 bottom-0 translate-y-[55%]">
          <Image
            src="/assets/images/hero_bg_2.png"
            height={600}
            width={1100}
            layout="responsive"
            alt="Hero Background Overlay"
            className="rounded-xl shadow-lg"
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;
