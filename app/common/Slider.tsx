"use client";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Oracle from "./svgs/Oracle";

type SliderProps = {
  text?: string;
};

const Slider: FC<SliderProps> = ({ text }) => {
  return (
    <div className="w-full min-h-80 relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        // spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1.25, spaceBetween: 16, centeredSlides: true },
          508: { slidesPerView: 1.75, spaceBetween: 16, centeredSlides: true },
          640: { slidesPerView: 2.35, centeredSlides: true }, // 2 slides on tablets
          768: { slidesPerView: 2.5, centeredSlides: true }, // 3 slides on desktops
          1024: { slidesPerView: 2.45 }, // 4 slides on larger screens
          1440: { slidesPerView: 3 }, // 4 slides on larger screens
        }}
        // autoplay={{ delay: 5000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide className="pb-3 !flex justify-center items-center">
          <div className="min-h-48 w-72 1.5xl:min-h-56 1.5xl:w-96 md:w-[380px] drop-shadow-md p-5 lg:p-8 rounded-2xl bg-white flex flex-col justify-center items-start gap-4">
            <p>
              Oracle leverages <span className="text-red-500">Prospeo</span> to
              uncover high-quality contact data, leading to great opportunities
              in AI
            </p>
            <p className="cursor-pointer underline">
              Read the story&nbsp;
              <span className="font-semibold">&#10230;</span>
            </p>
            <Oracle />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3 !flex justify-center items-center">
          <div className="min-h-48 w-72 1.5xl:min-h-56 1.5xl:w-96 md:w-[380px] drop-shadow-md p-5 lg:p-8 rounded-2xl bg-white flex flex-col justify-center items-start gap-4">
            <p>
              Oracle leverages <span className="text-red-500">Prospeo</span> to
              uncover high-quality contact data, leading to great opportunities
              in AI
            </p>
            <p className="cursor-pointer underline">
              Read the story&nbsp;
              <span className="font-semibold">&#10230;</span>
            </p>
            <Oracle />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3 !flex justify-center items-center">
          <div className="min-h-48 w-72 1.5xl:min-h-56 1.5xl:w-96 md:w-[380px] drop-shadow-md p-5 lg:p-8 rounded-2xl bg-white flex flex-col justify-center items-start gap-4">
            <p>
              Oracle leverages <span className="text-red-500">Prospeo</span> to
              uncover high-quality contact data, leading to great opportunities
              in AI
            </p>
            <p className="cursor-pointer underline">
              Read the story&nbsp;
              <span className="font-semibold">&#10230;</span>
            </p>
            <Oracle />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3 !flex justify-center items-center">
          <div className="min-h-48 w-72 1.5xl:min-h-56 1.5xl:w-96 md:w-[380px] drop-shadow-md p-5 lg:p-8 rounded-2xl bg-white flex flex-col justify-center items-start gap-4">
            <p>
              Oracle leverages <span className="text-red-500">Prospeo</span> to
              uncover high-quality contact data, leading to great opportunities
              in AI
            </p>
            <p className="cursor-pointer underline">
              Read the story&nbsp;
              <span className="font-semibold">&#10230;</span>
            </p>
            <Oracle />
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3 !flex justify-center items-center">
          <div className="min-h-48 w-72 1.5xl:min-h-56 1.5xl:w-96 md:w-[380px] drop-shadow-md p-5 lg:p-8 rounded-2xl bg-white flex flex-col justify-center items-start gap-4">
            <p>
              Oracle leverages <span className="text-red-500">Prospeo</span> to
              uncover high-quality contact data, leading to great opportunities
              in AI
            </p>
            <p className="cursor-pointer underline">
              Read the story&nbsp;
              <span className="font-semibold">&#10230;</span>
            </p>
            <Oracle />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex mt-4 gap-3 items-center justify-center md:justify-start z-10 md:ml-4">
        <Button
          size={"icon"}
          variant={"outline"}
          className="slider-prev p-3 rounded-full"
        >
          <IoIosArrowRoundBack className="text-sm font-normal" />
        </Button>
        <Button
          size={"icon"}
          variant={"outline"}
          className="slider-next p-3 rounded-full"
        >
          <IoIosArrowRoundForward className="!text-xs font-normal" />
        </Button>
      </div>
    </div>
  );
};

export default Slider;
