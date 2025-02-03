import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";

type Props = {};

const BentoGrid = (props: Props) => {
  return (
    <section className="mt-6">
      <h1 className="lg:text-5xl my-16 1.5xl:text-[68px] 2xl:text-7xl text-3xl font-coresans font-medium text-center text-balance">
        Find leads that respond
      </h1>
      <Wrapper>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
          <div className="col-span-1 min-h-80 rounded-xl bg-red-300 relative">
            <Image
              src={"/assets/images/grid1.png"}
              alt="grid 1"
              layout="responsive"
              fill
              className="object-contain"
            />
          </div>
          <div className="col-span-2 min-h-80 rounded-xl bg-red-300 relative">
            <Image
              src={"/assets/images/grid1.png"}
              alt="grid 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-3 min-h-40 rounded-xl bg-red-300"></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default BentoGrid;
