"use client";
import Image from "next/image";
import React from "react";
import JKBanner1 from "../../public/jankara.jpg";
import JKBanner2 from "../../public/jankara2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  return (
    <div className="w-full  h-[350px]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-[350px]">
            <Image
              src={JKBanner1}
              alt="Jankara Banner 1"
              //   fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[350px]">
            <Image
              src={JKBanner2}
              alt="Jankara Banner 2"
              //   fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
