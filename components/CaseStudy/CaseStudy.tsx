import DarkBG from "@/app/common/DarkBG";
import React from "react";
import Percentage from "../Percentage";
import CSContent from "./CSContent";

type Props = {};

const CaseStudy = (props: Props) => {
  return (
    <section className="mt-6">
      <h1 className="lg:text-5xl my-16 1.5xl:text-[68px] 2xl:text-7xl text-3xl font-coresans font-medium text-center text-balance">
        Cases study
      </h1>
      <DarkBG parentClass="grid md:grid-cols-3 grid-cols-1 text-white gap-8 2xl:gap-10">
        <CSContent />
      </DarkBG>
    </section>
  );
};

export default CaseStudy;
