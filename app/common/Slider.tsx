"use client";
import React, { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SliderProps = {
  text?: string;
};

const Slider: FC<SliderProps> = ({ text }) => {
  return (
    <div className="w-full min-h-80 relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 slide on small screens
          640: { slidesPerView: 2 }, // 2 slides on tablets
          768: { slidesPerView: 2.5 }, // 3 slides on desktops
          1024: { slidesPerView: 3 }, // 4 slides on larger screens
        }}
        // autoplay={{ delay: 5000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        loop={true}
        className="h-full"
      >
        <SwiperSlide className="pb-3">
          <div className="h-56 w-64 md:w-80 drop-shadow-md p-8 rounded-xl bg-white">
            22
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3">
          <div className="h-56 w-64 md:w-80 drop-shadow-md p-8 rounded-xl bg-white">
            22
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3">
          <div className="h-56 w-64 md:w-80 drop-shadow-md p-8 rounded-xl bg-white">
            22
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3">
          <div className="h-56 w-64 md:w-80 drop-shadow-md p-8 rounded-xl bg-white">
            22
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3">
          <div className="h-56 w-64 md:w-80 drop-shadow-md p-8 rounded-xl bg-white">
            22
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3">
          <div className="h-56 w-64 md:w-80 drop-shadow-md p-8 rounded-xl bg-white">
            22
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-3">
          <div className="h-56 w-64 md:w-80 drop-shadow-md p-8 rounded-xl bg-white">
            22
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
