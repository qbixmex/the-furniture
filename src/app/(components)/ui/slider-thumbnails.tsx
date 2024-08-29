"use client";

import { FC, useState, type CSSProperties } from 'react';
import { type Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slider-thumbnails.css';

type Props = {
  images: {
    id: string;
    url: string;
    alt: string;
  }[];
};

const SliderThumbnails: FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

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
        className="mySwiper2"
      >
        {
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.url} alt={image.alt} />
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
              <img src={image.url} alt={image.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
};

export default SliderThumbnails;