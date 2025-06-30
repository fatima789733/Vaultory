import React from "react";
import currencyAccounts from "../../assets/div-1.svg";
import teamCards from "../../assets/div-2.svg";
import reconciliation from "../../assets/div-3.svg";
import reporting from "../../assets/div-4.svg";
import "../../index.css";
const VaultorySection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-8">
          {/* Left Content */}
          <div className="space-y-6">
            <h2
              className="text-[39px] font-haffer leading-[130%] font-[670] capitalize text-transparent bg-clip-text"
              style={{
                fontStyle: "normal",
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
              className="text-[16px] font-haffer leading-[176%] capitalize"
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontStyle: "normal",
                fontWeight: 430,
                lineHeight: "176%",
              }}
            >
              Vaultory Is Your Ultimate Financial Command Hub — Seamlessly
              Manage Expenses, Track Cash Flow, And Gain Real-Time Insights To
              Stay In Control Of Your Business Finances, All From One Powerful
              Platform.
            </p>
          </div>

          {/* Multi-Currency Accounts Card */}
          <a href="#">
            <div
              className="bg-no-repeat bg-cover border border-gray-700 bg-center backdrop-blur-sm p-6"
              style={{
                width: "555px",
                height: "330px",
                flexShrink: 0,
                borderRadius: "10px",
                backgroundImage: `url(${currencyAccounts}), linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)`,
                backgroundBlendMode: "screen, normal",
              }}
            ></div>
          </a>
        </div>

        {/* Bottom Row - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Custom Team Cards */}
          <a href="#">
            <div
              className="bg-no-repeat bg-cover bg-center border border-gray-700 backdrop-blur-sm p-6"
              style={{
                width: "386px",
                height: "330px",
                flexShrink: 0,
                borderRadius: "10px",

                backgroundImage: `url(${teamCards}), linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)`,
                backgroundBlendMode: "screen, normal",
              }}
            ></div>
          </a>

          {/* Automated Reconciliation */}
          <a href="#">
            <div
              className="bg-no-repeat bg-cover bg-center border border-gray-700 backdrop-blur-sm p-6"
              style={{
                width: "386px",
                height: "330px",
                flexShrink: 0,
                borderRadius: "10px",

                backgroundImage: `url(${reconciliation}), linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)`,
                backgroundBlendMode: "screen, normal",
              }}
            ></div>
          </a>

          {/* Powerful Reporting */}
          <a href="#">
            <div
              className="bg-no-repeat bg-cover bg-center border border-gray-700 backdrop-blur-sm p-6"
              style={{
                width: "386px",
                height: "330px",
                flexShrink: 0,
                borderRadius: "10px",

                backgroundImage: `url(${reporting}), linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, rgba(164, 255, 255, 0.08) 100%)`,
                backgroundBlendMode: "screen, normal",
              }}
            ></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VaultorySection;
