import React, { useState } from "react";
import jonnas from "../../assets/jonna.png";
import eric from "../../assets/eric.png";
import WebflowIcon from "../../assets/icon-1.svg";
import FramerIcon from "../../assets/icon-2.svg";
import FigmaIcon from "../../assets/icon-3.svg";
import NotionIcon from "../../assets/icon-4.svg";
import LinearIcon from "../../assets/icon-5.svg";
import MetaIcon from "../../assets/icon-6.svg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const TestimonialSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Joanna",
      role: "CFO",
      company: "Voltum",
      quote: "Vaultory Saved Us 10+ Hours/Month And 50K In OpEx. Never Fear.",
      image: "/api/placeholder/400/400",
    },
    {
      id: 2,
      name: "Eric",
      role: "Founder",
      company: "LedgerBase",
      quote: "Our Finance Stack Went From 5 Tools To 1. Clean, Simple, Modern.",
      image: "/api/placeholder/400/400",
    },
  ];

  const companyLogos = [
    { name: "Webflow", icon: WebflowIcon },
    { name: "Framer", icon: FramerIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "Notion", icon: NotionIcon },
    { name: "Linear", icon: LinearIcon },
    { name: "Meta", icon: MetaIcon },
  ];

  return (
    <section className="bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Text + Icons */}
          <div className="space-y-8 font-haffer">
            <h2
              className="capitalize"
              style={{
                fontSize: "39px",
                fontStyle: "normal",
                fontWeight: 670,
                lineHeight: "130%",
                background:
                  "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trusted By
              <br /> Finance Teams
              <br /> Who Move Fast
              <br /> And Think Global
            </h2>

            <p
              className="capitalize font-haffer"
              style={{
                color: "rgba(255, 255, 255, 0.60)",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 430,
                lineHeight: "176%",
              }}
            >
              Trusted By Finance Teams Who Move
              <br /> Fast And Think Global.
            </p>

            <div className="grid grid-cols-3 rounded-md overflow-hidden w-full max-w-xs">
              {companyLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border border-gray-700/50 border-t-0 border-l-0"
                >
                  <div className="rounded-lg flex items-center justify-center py-5">
                    <img
                      src={logo.icon}
                      alt={logo.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Testimonial */}
          <div
            className={`rounded-2xl p-6 h-[496px] transition-all duration-300 ${
              activeSlide === 0
                ? "bg-gradient-to-br from-black to-teal-200/40 backdrop-blur-sm border border-gray-900/90"
                : "bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 opacity-50"
            }`}
          >
            <div className="mb-6">
              <div className="w-full h-[320px] mb-4 overflow-hidden">
                <img
                  src={jonnas}
                  alt="jonnas-card"
                  className="rounded-[10px]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-400">
                {testimonials[0].name}, {testimonials[0].role} @{" "}
                {testimonials[0].company}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {testimonials[0].quote}
              </p>
            </div>
          </div>

          {/* Right Testimonial */}
          <div
            className={`rounded-2xl p-6 h-[496px] transition-all duration-300 ${
              activeSlide === 1
                ? "bg-gradient-to-br from-black to-teal-200/40 backdrop-blur-sm border border-gray-900/90"
                : "bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 opacity-50"
            }`}
          >
            <div className="mb-6">
              <div className="w-full h-[320px] mb-4 overflow-hidden ">
                <img src={eric} alt="eric-card" className="rounded-[10px]" />
              </div>
            </div>
            <div className="p-4 flex flex-col justify-end flex-1 space-y-3">
              <h3 className="text-xl font-haffer font-bold text-white">
                {testimonials[1].name}, {testimonials[1].role} @{" "}
                {testimonials[1].company}
              </h3>
              <p className="text-gray-300 font-haffer text-sm leading-relaxed">
                {testimonials[1].quote}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-end mt-8 pr-6">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-[28px] h-[28px] rounded-full border mx-1 transition-all duration-300 ${
                activeSlide === index
                  ? "border-teal-900/90"
                  : "bg-gray-800 border-gray-700"
              }`}
              style={
                activeSlide === index
                  ? {
                      backgroundImage: `url('/path-to-image.png'), linear-gradient(135deg, rgba(164, 255, 255, 0.00) 0%, #A4FFFF 100%)`,
                      backgroundBlendMode: "screen, normal",
                      backgroundSize: "41.17px 41.17px",
                      backgroundRepeat: "repeat",
                      boxShadow: "0 0 12px #A4FFFF",
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
