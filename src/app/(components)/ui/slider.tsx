"use client";

import { type CSSProperties, type FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from 'swiper/modules';
import clsx from "clsx";

import 'swiper/css';
import 'swiper/css/navigation';

type Slide = {
  id: string;
  url: string;
  alt: string;
};

type Props = {
  slides: Slide[]
  className?: string;
  style?: CSSProperties;
};

const Slider: FC<Props> = ({ slides, className, style }) => {

  return (
    <section className={clsx(className)} style={style}>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            '--swiper-navigation-size': '30px',
            '--swiper-navigation-position': '10px',
          } as React.CSSProperties
        }
        spaceBetween={20}
        grabCursor={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={2000}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        slidesPerView="auto"
        // pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, EffectCreative]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              className="w-full h-auto max-w-[1440px] max-h-[720px] object-cover rounded"
              src={slide.url}
              width={1440}
              height={960}
              alt={slide.alt}
            />
          </SwiperSlide> 
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;