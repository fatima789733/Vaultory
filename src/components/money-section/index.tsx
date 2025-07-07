import React from "react";
import Button from "./button";
import { Play } from "lucide-react";
import coin from "../../assets/Coin.png";
import bgCoin from "../../assets/coin-bg.png";
import useInView from "../../hooks/useInView";
import "../money-section/money-responsive.css";
const MoneySection: React.FC = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden mt-10 mb-36 justify-center bg-black money-container"
    >
      <div
        className="relative w-[1210px] h-[719.459px] overflow-hidden rounded-[10px]"
        style={{
          background:
            "lightgray 0% 0% / 100px 100px repeat, linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)",
          backgroundBlendMode: "screen, normal",
          boxShadow: "9px -9px 32.9px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Background Glow */}
        <img
          src={bgCoin}
          alt="coin-bg"
          className="absolute z-0 right-0 bottom-[-190px]"
          style={{
            width: "1500px",
            height: "1350px",
            filter: "blur(20px)",
            transform: "rotate(-20deg)",
            opacity: 2,
          }}
        />

        {/* Foreground Coin */}
        <img
          src={coin}
          alt="coin"
          className="absolute bottom-0 mix-blend-overlay right-0 w-[1050px] h-[90%] z-10 opacity-[100%]"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-start w-full h-full">
          <div className="space-y-8 justify-items-start ml-10">
            <div className="space-y-6">
              <h1
                className={`capitalize font-haffer leading-tight money-heading transition-all duration-1000 ${
                  isInView ? "animate-fade-in-left" : "opacity-0 translate-x-10"
                }`}
                style={{
                  fontSize: "39px",
                  fontWeight: 670,
                  lineHeight: "130%",
                  background:
                    "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Stop Managing
                <br />
                Money The Old
                <br />
                Way.
              </h1>

              <p
                className={`font-haffer capitalize money-description max-w-md transition-all duration-1000 delay-200 ${
                  isInView
                    ? "animate-fade-in-left-delay"
                    : "opacity-0 translate-x-10"
                }`}
                style={{
                  color: "rgba(255, 255, 255, 0.60)",
                  fontSize: "16px",
                  fontWeight: 430,
                  lineHeight: "176%",
                }}
              >
                Smart Teams Use Vaultory To
                <br />
                Automate Finance And Stay In
                <br />
                Control. Your Turn.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="hero-button-primary ">
                Start Free Trial
              </Button>
              <button className="border-2 border-gray-400 secondary-button font-haffer hover:border-teal-300 text-gray-300 hover:text-teal-300 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 hover:bg-teal-400/10 min-w-[180px]">
                <Play className="w-5 h-5" />
                <span>See how it works</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneySection;
