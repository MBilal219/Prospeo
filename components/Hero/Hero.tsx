import ButtonIcon from "@/app/common/svgs/ButtonIcon";
import Wrapper from "@/app/common/Wrapper";
import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from "./HeroImage";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full p-0.5 lg:p-4 xl:p-5">
      <div className="relative w-full h-[430px] sm:h-[480px] md:h-[500px] lg:h-[700px] 1.5xl:h-[800px] rounded-xl mx-auto 2xl:max-w-[1600px]">
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
            <h1 className="lg:text-6xl 1.5xl:text-[68px] 2xl:text-7xl text-3xl font-coresans font-medium text-center text-balance">
              Find leads that respond
            </h1>
            <p className="font-coresans text-center text-balance font-normal lg:text-lg 1.5xl:text-xl">
              Accelerate growth with verified emails and mobile numbers - 250M
              leads
              <br />
              and 30M companies at your fingertips.
            </p>

            <div className="lg:w-72 1.5xl:w-80 w-56">
              <Image
                src={"/assets/images/rating.png"}
                alt="rating"
                width={400}
                height={40}
                layout="responsive"
              />
            </div>
            <Button
              variant={"destructive"}
              size="lg"
              className="1.5xl:text-lg 2xl:text-xl 1.5xl:!px-10 1.5xl:!py-6 1.5xl:rounded-xl"
            >
              <ButtonIcon /> Get Started for free
            </Button>
          </div>
        </Wrapper>

        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
