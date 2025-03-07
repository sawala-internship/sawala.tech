import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contentData from "@jsons/partnership.json"
import Image from "next/image";
import Link from "next/link";

const SliderPartnership = () => {
  const settings = {
    dots: false, //pagination
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,


    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    customPaging: () => (
      <div className="mt-10 h-3 w-3 bg-[#D9D9D9] rounded-full transition-all duration-300 hover:bg-primary/70"></div>
    ),
  
    // appendDots: (dots) => (
    //   <div className="flex justify-center">
    //     <ul>{dots}</ul>
    //   </div>
    // ),
  };

  return (
    <div className="w-full md:max-w-3xl lg:max-w-[816px] mx-auto p-2 ">
      <Slider {...settings}>
        {contentData.map((item, index) => (
          <div key={item.id || index} className="p-2">
            <div className="flex flex-col md:flex-row items-center md:items-start p-7 space-y-10 md:space-y-0 md:space-x-10 bg-primary/5 rounded-xl">
            <Link href="https://example.com">
              <a href={item.link}  target="_blank" rel="noopener noreferrer">
                <div className="w-44 h-44 cursor-pointer rounded-md bg-white flex items-center justify-center p-4 border-slate-200 border-[1.2px]">
                  <Image src={item.image} unoptimized width={165} height={23} alt="Logo" />
                </div>
                </a>
              </Link>
              <div className="flex flex-col space-y-4 items-start min-w-[268px] h-[356px] md:h-[230px] md:w-[400px] lg:w-[536px] lg:h-[188px] overflow-hidden">
                <h1 className="text-[clamp(14px, 4vw, 18px)] text-xl font-bold text-primary leading-tight">
                  {item.title}
                </h1>
                <p className="text-[clamp(12px, 3vw, 16px)] font-normal text-gray-500 text-base leading-snug line-clamp-3 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPartnership;
