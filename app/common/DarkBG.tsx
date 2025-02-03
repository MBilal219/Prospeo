import React, { FC, ReactNode } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import clsx from "clsx";

type DarkBgProps = {
  children: ReactNode;
  parentClass?: string;
};

const DarkBG: FC<DarkBgProps> = ({ children, parentClass }) => {
  return (
    <div>
      <Wrapper>
        <div
          className={clsx(
            "relative rounded-3xl min-h-[428px] w-full bg-[#0C0202]  p-6 lg:p-8 1.5xl:p-9",
            parentClass
          )}
        >
          <Image
            src="/assets/images/percent_bg.png"
            fill
            alt="precent Background"
            className="absolute rounded-[inherit] object-cover"
          />
          {children}
        </div>
      </Wrapper>
    </div>
  );
};

export default DarkBG;
