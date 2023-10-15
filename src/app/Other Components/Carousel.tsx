"use client";

import { Carousel } from "flowbite-react";

export default function ExampleCarousel() {
  const randImageArray = [
    "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/07/16572247631500.jpg",
    "https://www.nickiswift.com/img/gallery/the-shady-side-of-dwayne-johnson/intro-1651760124.jpg",
    "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg",
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-100p object-contain"
          alt="..."
          src={randImageArray[0]}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-100p object-contain"
          alt="..."
          src={randImageArray[1]}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-100p object-contain"
          alt="..."
          src={randImageArray[2]}
        />
      </Carousel>
    </div>
  );
}
