"use client";

import Image from "next/image";
import Avatar from "../../../public/images/avatar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    quote:
      "Digivolve transformed our IT infrastructure, making our operations more efficient and secure.",
    author: "Author Name",
    position: "VP of Company",
    avatar: Avatar,
  },
  {
    id: 2,
    quote:
      "Working with Digivolve was a game-changer for us. Their solutions streamlined our processes!",
    author: "Author Name",
    position: "VP of Company",
    avatar: Avatar,
  },
  {
    id: 3,
    quote:
      "Their expertise and professionalism delivered results beyond our expectations.",
    author: "Author Name",
    position: "VP of Company",
    avatar: Avatar,
  },
];

export function Testimonial() {
  return (
    <section className="py-16 bg-[#e8feff]">
      <div className="container mx-auto px-6 py-8">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          <style jsx global>
            {`
              .swiper-button-prev,
              .swiper-button-next {
                color: white;
              }
            `}
          </style>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="z-10">
              <div className="text-center">
                <h2 className="max-w-[720px] mx-auto text-2xl font-medium mb-8">
                  "{testimonial.quote}"
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
