import React from "react";
import Button from "./button";
import bgImage from "../../assets/Coin.png";
import coinBg from "../../assets/coin-bg.png";
const MoneySection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center bg-black">
      <div className="relative w-[1210px] h-[720px]  overflow-hidden rounded-xl shadow-lg">
        {/* Background Image at Bottom Right */}
        <div className="absolute bottom-0 right-0 z-0">
          <img
            src={coinBg}
            alt="coin"
            className="w-[300px] h-auto opacity-80"
          />
          <img
            src={bgImage}
            alt="coin"
            className="w-[300px] h-auto opacity-80"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Stop Managing
                    <br />
                    <span className="text-gray-300">Money The Old</span>
                    <br />
                    <span className="text-gray-300">Way.</span>
                  </h1>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
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
                  <Button variant="secondary">Talk to Sales</Button>
                </div>
              </div>

              {/* Right Side Spacer */}
              <div className="relative lg:block hidden">
                <div className="w-full h-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneySection;
