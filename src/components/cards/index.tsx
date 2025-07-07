import React from "react";
import pause from "../../assets/card-1.png";
import clock from "../../assets/card-2.png";
import zap from "../../assets/card-3.png";
import useInView from "../../hooks/useInView";
import "../cards/cards-responsiveness.css"; // ✅ External responsive styles

function BusinessFinanceHero() {
  const { ref, isInView } = useInView(0.3);

  return (
    <div ref={ref} className="bg-black text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h1
            className={`transition-all duration-1000 ease-out ${
              isInView
                ? "opacity-100 translate-x-0 blur-0"
                : "opacity-0 -translate-x-20 blur-sm"
            } text-4xl font-haffer font-bold mb-4 text-transparent bg-clip-text finance-heading`}
            style={{
              background:
                "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Way Businesses Handle Money? Broken.
          </h1>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Too Many Tools */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-black to-teal-700/40 border border-gray-700 rounded-[10px] p-6 transition-all duration-300 hover:scale-105 w-full max-w-[380px] h-[300px] mx-auto finance-card">
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-4 rounded-xl flex items-center justify-center">
                <img src={pause} alt="pause" />
              </div>
              <h3
                className="text-lg font-semibold font-haffer mb-3 text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Too Many Tools
              </h3>
              <p className="text-gray-300 font-haffer leading-relaxed text-sm flex-1 flex items-center">
                One Platform To Send Payments. Another For Expense Tracking. A
                Third For Payroll. It's Chaos.
              </p>
            </div>
          </div>

          {/* Card 2: Too Much Time Wasted */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-black to-teal-700/40 border border-gray-700 rounded-[10px] p-6 transition-all duration-300 hover:scale-105 w-full max-w-[380px] h-[300px] mx-auto finance-card">
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-4 rounded-xl flex items-center justify-center">
                <img src={clock} alt="clock" />
              </div>
              <h3
                className="text-lg font-semibold font-haffer mb-3 text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Too Much Time Wasted
              </h3>
              <p className="text-gray-300 font-haffer leading-relaxed text-sm flex-1 flex items-center">
                Reconciliation, Approvals, Budgeting — All Done Manually, Across
                Tabs.
              </p>
            </div>
          </div>

          {/* Card 3: Too Little Flexibility */}
          <div className="backdrop-blur-sm border bg-gradient-to-br from-black to-teal-700/40 border-gray-700 rounded-[10px] p-6 transition-all duration-300 hover:scale-105 w-full max-w-[380px] h-[300px] mx-auto finance-card">
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-4 rounded-xl flex items-center justify-center">
                <img src={zap} alt="zap" />
              </div>
              <h3
                className="text-lg font-semibold font-haffer mb-3 text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Too Little Flexibility
              </h3>
              <p className="text-gray-300 font-haffer leading-relaxed text-sm flex-1 flex items-center">
                Most Finance Tools Weren't Built For Remote-First, Global Teams.
              </p>
            </div>
          </div>
        </div>

        {/* Background animations */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

export default BusinessFinanceHero;
