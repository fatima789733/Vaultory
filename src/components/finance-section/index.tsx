import React from "react";
import bgCard from "../../assets/card.svg";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1439"
            height="228.547"
            viewBox="0 0 1439 232"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M1439 230.3H824.312L595.774 1.75293H0"
              stroke="url(#paint0_linear_2320_5936)"
              strokeWidth="2.445"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2320_5936"
                x1="0"
                y1="116.027"
                x2="1439"
                y2="116.027"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.5" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src={bgCard}
          alt="card-section"
          style={{
            width: "1210px",
            height: "719.459px",
            marginTop: "150px",
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
