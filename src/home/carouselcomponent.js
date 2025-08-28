import React, { useState, useEffect } from "react";
import "./carouselcomponent.css";

const images = [
  { src: "laundry24slide1.png", alt: "Laundry 24 Orlando Slide 001" },
  { src: "laundry24slide2.png", alt: "Laundry 24 Orlando Slide 002" },
  { src: "laundry24slide3.png", alt: "Laundry 24 Orlando Slide 003" },
  { src: "laundry24slide4.png", alt: "Laundry 24 Orlando Slide 004" },
  { src: "laundry24slide5.png", alt: "Laundry 24 Orlando Slide 005" },
  { src: "laundry24slide6.png", alt: "Laundry 24 Orlando Slide 006" },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.src} alt={image.alt} className="d-block w-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
