import { useState } from "react";
import "./Carousel.css";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";

const Carousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel" style={{ position: "relative" }}>
      <img
        key={currentIndex}
        src={`${process.env.NEXT_PUBLIC_AMAZON_S3}/${images[currentIndex]}`}
      />
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <ArrowLeftRounded style={{ fontSize: "2.5rem" }} />
        </div>
        <div className="right" onClick={handleNext}>
          <ArrowRightRounded style={{ fontSize: "2.5rem" }} />
        </div>
      </div>
      <div className="indicator carousel-indicator">
        {images.map((_: any, index: any) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
