import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
const CustomTalentExploreCard = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 4, // Number of cards to show at a time
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
  const cards = [
    { title: "Card 1", description: "This is card 1." },
    { title: "Card 2", description: "This is card 2." },
    { title: "Card 3", description: "This is card 3." },
    { title: "Card 4", description: "This is card 4." },
    { title: "Card 5", description: "This is card 5." },
  ];
  return (
    <div>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className=" flex flex-col items-center justify-center bg-cardbgcolor shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
              <div class="w-20 h-20 bg-backgroundcolor rounded-full absolute -right-5 -top-7">
                <p class="absolute bottom-3 left-4 text-white text-2xl">
                  <FontAwesomeIcon icon={faDesktop} />
                </p>
              </div>

              <h1 className="text-2xl tracking-widest font-bold">
                JAVA DEVELOPER
              </h1>
              <p className="text-sm tracking-wider">
                {/* Description  */}
                Find your suitable JAVA Programmer in best price, with just one
                click
              </p>

              <div className="text-xs text-cardcolor">4.9 Average Rating</div>
              <div className="w-full bg-gray-300 rounded-full h-1 relative overflow-hidden mt-2">
                <div
                  className="absolute top-0 left-0 h-full bg-backgroundcolor rounded-full"
                  style={{ width: "75%" }} // Adjust the width dynamically based on the rating
                ></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomTalentExploreCard;
