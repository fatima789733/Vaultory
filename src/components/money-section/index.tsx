import React from "react";
import Button from "./button";
import { Play } from "lucide-react";
import coin from "../../assets/Coin.png";
import bgCoin from "../../assets/coin-bg.png";
const MoneySection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center bg-black">
      <div
        className="relative w-[1210px] h-[719.459px]  border rounded-[10px] "
        style={{
          background:
            " lightgray 0% 0% / 100px 100px repeat, linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)",
          backgroundBlendMode: "screen, normal",
          boxShadow: "9px -9px 32.9px 0px rgba(0, 0, 0, 0.25)",
          flexShrink: 0,
        }}
      >
        <img
          src={bgCoin}
          alt="coin-bg"
          className="absolute bottom-0 right-0 z-10"
          style={{
            width: "1000px",
            height: "100%", // 👈 Match main div height
            borderRadius: "1000px",
            filter: "blur(80px)",
            transform: "rotate(-20deg)",
            opacity: 0.7,
          }}
        />

        {/* Foreground coin */}
        <img
          src={coin}
          alt="coin"
          className="absolute bottom-0 right-0 w-[733px] h-full object-contain z-0 opacity-90" // 👈 h-full to match parent
        />
        {/* Content */}
        <div className="relative z-10 flex items-center justify-start w-full h-full ">
          {/* Left Content */}
          <div className="space-y-8 justify-items-start">
            <div className="space-y-6">
              <h1
                className="animate-fade-in-left capitalize font-haffer leading-tight"
                style={{
                  fontSize: "39px",
                  fontStyle: "normal",
                  fontWeight: 670,
                  lineHeight: "130%", // 50.7px
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
                className="animate-fade-in-left-delay font-haffer capitalize max-w-md"
                style={{
                  color: "rgba(255, 255, 255, 0.60)",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 430,
                  lineHeight: "176%", // 28.16px
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
              <Button variant="primary">Start Free Trial</Button>
              <button className="border-2 border-gray-400 font-haffer hover:border-teal-300 text-gray-300 hover:text-teal-300 px-6 py-2.5 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 hover:bg-teal-400/10 min-w-[180px]">
                <Play className="w-5 h-5" />
                <span>See how it works</span>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneySection;
