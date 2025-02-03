import Docusign from "@/app/common/svgs/Docusign";
import Flixier from "@/app/common/svgs/Flixier";
import FreshBook from "@/app/common/svgs/FreshBook";
import Google from "@/app/common/svgs/Google";
import Oracle from "@/app/common/svgs/Oracle";
import Webflow from "@/app/common/svgs/Webflow";
import Wrapper from "@/app/common/Wrapper";

type Props = {};

const InfiniteScroll = (props: Props) => {
  return (
    <div className="mt-32 xs:mt-48 sm:mt-60 lg:mt-72 xl:mt-[350px] 1.5xl:mt-[425px] 2xl:mt-[450px] mb-12">
      <Wrapper>
        <div className="marquee">
          <div className="marquee__group">
            <Google />
            <Docusign />
            <Flixier />
            <Oracle />
            <Webflow />
            <FreshBook />
          </div>

          <div aria-hidden="true" className="marquee__group">
            <Google />
            <Docusign />
            <Flixier />
            <Oracle />
            <Webflow />
            <FreshBook />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default InfiniteScroll;
