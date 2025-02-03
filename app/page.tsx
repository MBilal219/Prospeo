import Hero from "@/components/Hero/Hero";
import InfiniteScroll from "@/components/InfiniteScroll";
import Percentage from "@/components/Percentage";
import { Fragment } from "react";
import BentoGrid from "./common/BentoGrid";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <InfiniteScroll />
      <Percentage />
      {/* <BentoGrid /> */}
    </Fragment>
  );
}
