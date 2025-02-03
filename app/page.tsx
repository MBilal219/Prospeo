import Hero from "@/components/Hero/Hero";
import InfiniteScroll from "@/components/InfiniteScroll";
import Percentage from "@/components/Percentage";
import { Fragment } from "react";
import BentoGrid from "./common/BentoGrid";
import DarkBG from "./common/DarkBG";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Revenue from "@/components/Revenue/Index";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <InfiniteScroll />
      <DarkBG parentClass="flex flex-col justify-center items-center text-white gap-4 1.5xl:gap-6 2xl:gap-8">
        <Percentage />
      </DarkBG>
      <BentoGrid />
      <CaseStudy />
      <Revenue />
    </Fragment>
  );
}
