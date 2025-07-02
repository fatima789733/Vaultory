import React from "react";
import bgCard from "../../assets/card.svg";
import DiagonalLine from "./angle-line";
const FinanceHeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Main Content */}
        <div className="relative ">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-haffer leading-tight mb-6 z-20">
            <div
              className="capitalize"
              style={{
                fontSize: "39px",
                fontStyle: "normal",
                fontWeight: 670,
                lineHeight: "130%",
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
              className="capitalize block"
              style={{
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 670,
                lineHeight: "130%",
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

          <p className="text-gray-500 text-lg font-haffer">
            Interactive Carousel Or Horizontal Scroll (Fake Interaction)
          </p>
        </div>

        {/* Angled Border Design */}
        <div className="absolute top-[-40px] right-0 w-full h-full pointer-events-none">
          {/* Main angled line */}
          <DiagonalLine />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={bgCard}
          alt="card-section"
          style={{
            width: "1210px",
            flexShrink: 0,
            borderRadius: "10px",
            background:
              "lightgray 0% 0% / 100px 100px repeat, linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)",
            backgroundBlendMode: "screen",
            boxShadow: "9px -9px 32.9px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
      </div>
    </section>
  );
};

export default FinanceHeroSection;
