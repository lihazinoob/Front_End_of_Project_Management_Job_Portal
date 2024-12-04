import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const JobExploreSection = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1, // Number of cards to scroll at a time
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed in ms
    responsive: [
      {
        breakpoint: 1024, // Adjust for screens <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust for screens <= 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample card data
  const cards = [
    { title: "Card 1", description: "This is card 1." },
    { title: "Card 2", description: "This is card 2." },
    { title: "Card 3", description: "This is card 3." },
    { title: "Card 4", description: "This is card 4." },
    { title: "Card 5", description: "This is card 5." },
  ];
  return (
    <div className="p-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-cardcolor rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default JobExploreSection
