import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import ButtonIcon from "@/app/common/svgs/ButtonIcon";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type Props = {};

const Collaboration = (props: Props) => {
  return (
    <div className="mt-8 w-full">
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-4 lg:gap-6">
        <div className="col-span-1 min-h-64 rounded-xl bg-[#0C0202] relative text-white">
          <Image
            src="/assets/images/grid-2-1.png"
            fill
            alt="precent Background"
            className="absolute rounded-[inherit] object-cover "
          />
          <div className="relative z-10 flex flex-col justify-center items-start gap-4 p-4">
            <div className="relative h-10 w-full">
              <Image
                src="/assets/images/avatars.png"
                height={128}
                width={320}
                layout="responsive"
                alt="precent Background"
              />
            </div>
            <h1>Collaborate</h1>
            <p className="text-sm">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="text-sm">
              Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <div className="relative h-8 w-8">
              <Image
                src="/assets/images/1arrow.png"
                height={28}
                width={44}
                layout="responsive"
                alt="precent Background"
              />
            </div>
            <div className="absolute h-8 w-12 right-4 bottom-4">
              <Image
                src="/assets/images/2arrow.png"
                height={28}
                width={44}
                layout="responsive"
                alt="precent Background"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-1 min-h-64 rounded-xl overflow-hidden bg-[#0C0202] relative text-white">
          <Image
            src="/assets/images/grid-2-2.png"
            fill
            alt="precent Background"
            className="absolute rounded-[inherit] object-cover "
          />
          <div className="size-full p-12">
            <div className="flex flex-col items-center justify-center gap-8 size-full">
              <Tabs defaultValue="Founders" className="z-10 font-coresans">
                <TabsList>
                  <TabsTrigger value="Founders">
                    Find prospect information
                  </TabsTrigger>
                  <TabsTrigger value="Sales Team">Export searches</TabsTrigger>
                  <TabsTrigger value="Revops">Create lists</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center flex-col md:flex-row justify-between gap-6 relative">
                <div className="relative h-44 w-56">
                  <Image
                    src="/assets/images/linkedin.png"
                    height={180}
                    width={268}
                    layout="responsive"
                    alt="precent Background"
                  />
                </div>
                <div className="absolute h-36 w-44 hidden md:block bottom-0 right-[51%]">
                  <Image
                    src="/assets/images/arrow.png"
                    height={140}
                    width={268}
                    layout="responsive"
                    alt="precent Background"
                  />
                </div>
                <div className="md:w-[50%] space-y-4">
                  <p className="text-sm">
                    Korem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="text-sm">
                    Curabitur tempus urna at turpis condimentum lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-shadow-md min-h-96 col-span-1 lg:col-span-3 lg:min-h-56 relative rounded-xl text-white bg-[#0C0202] flex flex-col md:flex-row lg:p-6 p-4 items-center justify-center gap-6">
          <Image
            src="/assets/images/cta-2.png"
            fill
            alt="precent Background"
            className="absolute rounded-[inherit] object-cover object-right"
          />
          <div className="flex flex-col items-center  justify-center z-10 gap-4 md:gap-6">
            <h1 className="lg:text-5xl 1.5xl:text-[56px] text-3xl md:text-4xl font-montreal font-medium text-center  md:text-left text-balance">
              You are a click away from Growth
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <Button
                variant={"destructive"}
                // size="lg"
                className="1.5xl:text-lg 2xl:text-xl 1.5xl:!px-10 1.5xl:!py-6 1.5xl:rounded-xl"
              >
                <ButtonIcon /> Get Started for free
              </Button>
              <Button
                variant={"outline"}
                // size="lg"
                className="1.5xl:text-lg w-full lg:w-auto 2xl:text-xl inner-shadow-sm border border-white/10 bg-[#13141A33]/20 backdrop-blur text-white hover:border-white/10 hover:bg-[#13141A33]/20 hover:backdrop-blur hover:text-white transition-all ease-in-out duration-300 hover:!inner-shadow 1.5xl:!px-10 1.5xl:!py-6 1.5xl:rounded-xl"
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
