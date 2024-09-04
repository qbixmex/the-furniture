"use client";

import { FC, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { type Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slider-thumbnails.css';
import { Product } from '@/data/furniture';

type Props = {
  images: Product["images"];
};

const SliderThumbnails: FC<Props> = ({ images }) => {
  const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-size': '30px',
        } as CSSProperties}
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={1000}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        {
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image src={image.url} alt={image.alt} width={640} height={426} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image src={image.url} alt={image.alt} width={150} height={100} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
};

export default SliderThumbnails;