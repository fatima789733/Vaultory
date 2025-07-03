import React from "react";
import bgCard from "../../assets/card.svg";
import DiagonalLine from "./angle-line";
import useInView from "../../hooks/useInView";
import useScrollAnimation from "../../hooks/useScrollAnimation"; // Import the new hook
import "./animation.css"; // Import the animation CSS file

const FinanceHeroSection: React.FC = () => {
  const { ref, isInView } = useInView(0.3);

  // Initialize scroll animation for the image
  const { ref: imageRef, getDynamicTransform } = useScrollAnimation({
    threshold: 0.1,
    smoothness: 0.15,
  });

  return (
    <section
      ref={ref}
      className="bg-black text-white py-20 px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Main Content */}
        <div className="relative">
          <h1
            className={`text-2xl md:text-6xl lg:text-7xl font-light font-haffer leading-tight mb-6 z-20 transition-all duration-1000 ${
              isInView ? "animate-fade-in-left" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="capitalize text-2xl md:text-[39px] leading-[130%] font-semibold"
              style={{
                background:
                  "linear-gradient(94deg, rgba(255, 255, 255, 0.40) -6.72%, #FFF 46.17%, rgba(255, 255, 255, 0.40) 99.07%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <span className="block">Finance Built Like</span>
              <span className="block">Modern Software.</span>
            </div>

            <span
              className="capitalize block text-2xl md:text-[64px] leading-[130%] font-semibold"
              style={{
                background:
                  "linear-gradient(93deg, rgba(255, 255, 255, 0.58) 1.76%, #A4FFFF 28.8%, #FFF 55.84%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Finally.
            </span>
          </h1>

          <p
            className={`text-gray-500 text-lg font-haffer transition-all duration-1000 delay-200 ${
              isInView
                ? "animate-fade-in-left-delay"
                : "opacity-0 translate-x-10"
            }`}
          >
            Interactive Carousel Or Horizontal Scroll (Fake Interaction)
          </p>
        </div>

        {/* Angled Border Design */}
        <div className="absolute top-[-40px] right-0 w-full h-full pointer-events-none">
          <DiagonalLine />
        </div>
      </div>

      {/* Decorative Background Card with Scroll-based 3D Tilt Animation */}
      <div className="flex justify-center items-center mt-10 container-3d-perspective">
        <img
          ref={imageRef}
          src={bgCard}
          alt="card-section"
          className="image-3d-scroll-based"
          style={{
            width: "1210px",
            flexShrink: 0,
            borderRadius: "10px",
            background:
              "lightgray 0% 0% / 100px 100px repeat, linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)",
            backgroundBlendMode: "screen",
            boxShadow: "9px -9px 32.9px 0px rgba(0, 0, 0, 0.25)",
            ...getDynamicTransform(), // Apply scroll-based transform
          }}
        />
      </div>
    </section>
  );
};

export default FinanceHeroSection;
