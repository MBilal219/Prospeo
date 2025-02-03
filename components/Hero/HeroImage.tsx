import Wrapper from "@/app/common/Wrapper";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";

type Props = {};

const HeroImage = (props: Props) => {
  return (
    <Wrapper className="absolute left-1/2  -translate-x-1/2 bottom-0 translate-y-[55%]">
      <Image
        src="/assets/images/hero_bg_2.png"
        height={600}
        width={1100}
        layout="responsive"
        alt="Hero Background Overlay"
        className="rounded-xl shadow-lg"
      />
      <div className="size-16 lg:size-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full lg:p-2 p-1.5">
        <div className="inset-0 absolute bg-gradient-radial from-[#ee1313] to-white rounded-[inherit] blur-sm"></div>
        <div className="bg-[#ee1313] rounded-[inherit] relative z-10 size-full flex items-center justify-center cursor-pointer ">
          <FaPlay color="#ffffff" className="text-lg lg:text-4xl" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroImage;
