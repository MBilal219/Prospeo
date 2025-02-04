import Slider from "@/app/common/Slider";
import Pentagonbackground from "@/app/common/svgs/Pentgon";
import Wrapper from "@/app/common/Wrapper";
import Image from "next/image";
import React from "react";
import Collaboration from "../Collaboration/Index";

type Props = {};

const Revenue = (props: Props) => {
  return (
    <section className="mt-6">
      <div className="relative mx-auto w-full min-h-screen 2xl:max-w-[1600px] lg:p-8">
        <div className="absolute rounded-xl mx-auto pentagon bg-[#FFF9EF] inset-0 -z-10">
          <Image
            src="/assets/images/pg-box.png"
            alt="pg boxes"
            height={840}
            width={1530}
            layout="responsive"
            className="bottom-0 absolute md:relative z-0"
          />
        </div>
        <Wrapper>
          <div className="flex items-start flex-col justify-center gap-8">
            <h1 className="lg:text-5xl 1.5xl:text-[52px] 2xl:text-6xl text-3xl font-coresans font-medium text-center md:text-left text-balance">
              Meet the companies generating more
              <br />
              revenues with <span className="text-red-500">Prospeo</span>
            </h1>
            <Slider />
            <Collaboration />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Revenue;
