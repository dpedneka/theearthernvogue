"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { Grid2 } from "@mui/material";
import "./Carousel.css";

const images = [
  "/images/slider/slider_image2.webp",
  "/images/slider/slider_image1.webp",
  "/images/slider/slider_image3.webp",
];

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Below 768px (mobile view)
        settings: {
          slidesToShow: 1, // Show 1 image in mobile view
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <Grid2 key={index} className="p-2">
              <div className="rounded-md overflow-hidden">
                <img src={item} />
              </div>
            </Grid2>
          );
        })}
      </Slider>
    </div>
  );
}
