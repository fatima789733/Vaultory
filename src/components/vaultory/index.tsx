import React from "react";
import currencyAccounts from "../../assets/div-1.svg";
import teamCards from "../../assets/div-2.svg";
import reconciliation from "../../assets/div-3.svg";
import reporting from "../../assets/div-4.svg";
import useInView from "../../hooks/useInView";
import "../../index.css";

const VaultorySection: React.FC = () => {
  const { ref, isInView } = useInView(0.3); // Hook with threshold

  return (
    <section
      ref={ref}
      className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20   mb-6 sm:mb-8">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-10 pt-6 sm:pt-10 lg:pt-14">
            <h2
              className={`text-2xl sm:text-3xl lg:text-[39px] font-haffer leading-[130%] font-[670] capitalize text-transparent bg-clip-text transition-all duration-1000 ${
                isInView ? "animate-fade-in-left" : "opacity-0 translate-x-10"
              }`}
              style={{
                background:
                  "linear-gradient(94deg, rgba(255, 255, 255, 0.40) -6.72%, #FFF 46.17%, rgba(255, 255, 255, 0.40) 99.07%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Meet Vaultory — The All-In-One Control Center For Your Business
              Finances.
            </h2>
            <p
              className={`text-sm sm:text-base lg:text-[16px] font-haffer leading-[176%] capitalize transition-opacity duration-1000 delay-200 ${
                isInView
                  ? "animate-fade-in-left-delay"
                  : "opacity-0 translate-x-10"
              }`}
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontWeight: 430,
              }}
            >
              Vaultory Is Your Ultimate Financial Command Hub — Seamlessly
              Manage
              <br className="hidden sm:block" /> Expenses, Track Cash Flow, And
              Gain Real-Time Insights To Stay In Control
              <br className="hidden sm:block" /> Of Your Business Finances, All
              From One Powerful Platform.
            </p>
          </div>

          {/* Multi-Currency Card — no animation here */}
          <div className="w-full max-w-[555px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-[10px] px-4 border border-gray-700 flex items-center justify-between mx-auto lg:mx-0">
            <div
              className="mt-20 sm:mt-32 lg:mt-40 flex-shrink-0"
              style={{ width: "160px", minWidth: "160px" }}
            >
              <h3
                className="capitalize font-haffer text-lg sm:text-xl lg:text-[25px]"
                style={{
                  fontWeight: 670,
                  lineHeight: "130%",
                  background:
                    "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Multi-Currency
                <br />
                Accounts
              </h3>
              <p
                className="capitalize font-haffer mt-2 text-sm sm:text-base"
                style={{
                  color: "rgba(255, 255, 255, 0.60)",
                  fontWeight: 430,
                  lineHeight: "176%",
                }}
              >
                Open IBANs Across
                <br />
                Continents. Instantly.
              </p>
            </div>

            <a href="#" className="flex-1">
              <div
                className="bg-no-repeat bg-cover bg-center backdrop-blur-sm ml-10"
                style={{
                  width: "100%",
                  maxWidth: "385px",
                  height: "350px",
                  borderRadius: "10px",
                  backgroundImage: `url(${currencyAccounts}), linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)`,
                  backgroundBlendMode: "screen, normal",
                }}
              ></div>
            </a>
          </div>
        </div>

        {/* Optional: animate cards below too */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[teamCards, reconciliation, reporting].map((img, index) => (
            <a href="#" key={index} className="block">
              <div
                className="bg-no-repeat bg-cover bg-center border border-gray-700 backdrop-blur-sm p-4 sm:p-6 relative w-full h-[280px] sm:h-[310px] lg:h-[330px] max-w-[386px] mx-auto sm:mx-0"
                style={{
                  borderRadius: "10px",
                  backgroundImage: `url(${img}), linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)`,
                  backgroundBlendMode: "screen, normal",
                }}
              >
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <h3
                    className="capitalize font-haffer text-lg sm:text-xl lg:text-[25px]"
                    style={{
                      fontWeight: 670,
                      lineHeight: "130%",
                      background:
                        "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {index === 0
                      ? "Custom Team Cards"
                      : index === 1
                      ? "Automated Reconciliation"
                      : "Powerful Reporting"}
                  </h3>
                  <p
                    className="capitalize font-haffer text-sm sm:text-base"
                    style={{
                      color: "rgba(255, 255, 255, 0.60)",
                      fontWeight: 430,
                      lineHeight: "176%",
                    }}
                  >
                    {index === 0
                      ? "Issue Smart Cards To Anyone. Control Spending In Real Time."
                      : index === 1
                      ? "No more manual sorting. Vaultory tags and syncs everything."
                      : "Know exactly where every dollar goes — and why."}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VaultorySection;
