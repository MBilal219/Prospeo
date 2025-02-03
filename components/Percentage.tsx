import Wrapper from "@/app/common/Wrapper";
import Image from "next/image";
import React from "react";

type Props = {};

const Percentage = (props: Props) => {
  return (
    <div>
      <Wrapper>
        <div className="relative rounded-3xl min-h-[428px] w-full bg-[#0C0202] flex flex-col justify-center items-center text-white gap-4 1.5xl:gap-6 2xl:gap-8 p-6 lg:p-8 1.5xl:p-9">
          <Image
            src="/assets/images/percent_bg.png"
            fill
            alt="precent Background"
            className="absolute rounded-[inherit] object-cover"
          />
          <h1 className="lg:text-4xl 1.5xl:text-[44px] text-2xl font-montreal font-normal text-center text-balance">
            “27% Increase in positive reply”
          </h1>
          <p className="font-coresans text-center text-sm  font-normal lg:text-lg 1.5xl:text-xl 2xl:text-2xl 1.5xl:max-w-[60%] lg:max-w-[80%] 2xl:max-w-[85%]">
            “The depth and breadth of Prospeo’s database has enabled us to
            prospect better accounts and bring in larger deals. In fact, since
            bringing on Prospeo the average company size we’re closing has grown
            by 2.5x.”
          </p>
          <div className="relative w-full h-9 md:h-10 1.5xl:h-12 cursor-pointer">
            <Image
              src={"/assets/images/avatar.png"}
              fill
              className="absolute object-contain"
              alt="avatar"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 1.5xl:gap-6 w-full">
            <div className="flex flex-col justify-end items-center inner-shadow pt-4 px-4 gap-3 1.5xl:gap-4 rounded-2xl border-2 border-white/10 bg-[#13141A33]/20 backdrop-blur">
              <h1 className="lg:text-4xl 1.5xl:text-[44px]  text-3xl font-coresans font-normal text-center text-balance">
                55%
              </h1>
              <p className="font-coresans text-center 1.5xl:text-xl text-sm  font-normal lg:text-lg ">
                Pick up rate on mobiles
              </p>
              <div className="h-20 w-32 1.5xl:h-24 1.5xl:w-36 relative">
                <Image
                  alt="img 1"
                  src={"/assets/images/img1.png"}
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-end items-center inner-shadow pt-4 px-4 gap-3 1.5xl:gap-4 rounded-2xl border-2 border-white/10 bg-[#13141A33]/20 backdrop-blur">
              <h1 className="lg:text-4xl 1.5xl:text-[44px]  text-3xl font-coresans font-normal text-center text-balance">
                55M
              </h1>
              <p className="font-coresans text-center 1.5xl:text-xl text-sm  font-normal lg:text-lg ">
                Verified email addresses
              </p>
              <div className="h-20 w-32 1.5xl:h-24 1.5xl:w-36 relative">
                <Image
                  alt="img 1"
                  src={"/assets/images/img2.png"}
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-end items-center inner-shadow pt-4 px-4 gap-3 1.5xl:gap-4 rounded-2xl border-2 border-white/10 bg-[#13141A33]/20 backdrop-blur">
              <h1 className="lg:text-4xl 1.5xl:text-[44px]  text-3xl font-coresans font-normal text-center text-balance">
                98%
              </h1>
              <p className="font-coresans text-center 1.5xl:text-xl text-sm  font-normal lg:text-lg ">
                Data accuracy
              </p>
              <div className="h-20 w-32 1.5xl:h-24 1.5xl:w-36 relative">
                <Image
                  alt="img 1"
                  src={"/assets/images/img3.png"}
                  fill
                  className="absolute object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Percentage;
