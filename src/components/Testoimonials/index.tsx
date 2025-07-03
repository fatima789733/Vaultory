import React, { useState } from "react";
import jonnas from "../../assets/jonna.png";
import eric from "../../assets/eric.png";
import WebflowIcon from "../../assets/icon-1.svg";
import FramerIcon from "../../assets/icon-2.svg";
import FigmaIcon from "../../assets/icon-3.svg";
import NotionIcon from "../../assets/icon-4.svg";
import LinearIcon from "../../assets/icon-5.svg";
import MetaIcon from "../../assets/icon-6.svg";
import useInView from "../../hooks/useInView"; // ✅ Make sure it's working

const TestimonialSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const { ref, isInView } = useInView(0.3); // ✅ Trigger when 30% of section is in viewport

  const testimonials = [
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
    <section
      ref={ref}
      className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Text + Logos */}
          <div className="space-y-6 sm:space-y-8 font-haffer text-center lg:text-left">
            <h2
              className={`capitalize font-semibold leading-[130%] transition-all duration-1000 ${
                isInView ? "animate-fade-in-left" : "opacity-0 translate-x-10"
              }`}
              style={{
                fontSize: "clamp(24px, 5vw, 39px)",
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
              className={`capitalize font-haffer px-2 sm:px-0 transition-all duration-1000 delay-200 ${
                isInView
                  ? "animate-fade-in-left-delay"
                  : "opacity-0 translate-x-10"
              }`}
              style={{
                color: "rgba(255, 255, 255, 0.60)",
                fontSize: "clamp(14px, 2.5vw, 16px)",
                fontStyle: "normal",
                fontWeight: 430,
                lineHeight: "176%",
              }}
            >
              Trusted By Finance Teams Who Move
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Fast And Think Global.
            </p>

            {/* Company Logos */}
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-3 rounded-md overflow-hidden w-full max-w-xs sm:max-w-sm">
                {companyLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center border border-gray-700/50 border-t-0 border-l-0"
                  >
                    <div className="rounded-lg flex items-center justify-center py-3 sm:py-4 lg:py-5">
                      <img
                        src={logo.icon}
                        alt={logo.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials (unchanged) */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
            {/* Card 1 */}
            <div
              className={`rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
                activeSlide === 0
                  ? "bg-gradient-to-br from-black to-teal-200/40 backdrop-blur-sm border border-gray-900/90"
                  : "bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 opacity-50"
              }`}
              style={{ height: "clamp(400px, 60vw, 496px)" }}
            >
              <div className="mb-4 sm:mb-6">
                <div
                  className="w-full mb-4 overflow-hidden"
                  style={{ height: "clamp(240px, 45vw, 320px)" }}
                >
                  <img
                    src={jonnas}
                    alt="jonnas-card"
                    className="rounded-[10px] w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-white text-[clamp(16px,3vw,20px)]">
                  {testimonials[0].name}, {testimonials[0].role} @{" "}
                  {testimonials[0].company}
                </h3>
                <p className="text-gray-300 leading-relaxed text-[clamp(12px,2.5vw,14px)]">
                  {testimonials[0].quote}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
                activeSlide === 1
                  ? "bg-gradient-to-br from-black to-teal-200/40 backdrop-blur-sm border border-gray-900/90"
                  : "bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 opacity-50"
              }`}
              style={{ height: "clamp(400px, 60vw, 496px)" }}
            >
              <div className="mb-4 sm:mb-6">
                <div
                  className="w-full mb-4 overflow-hidden"
                  style={{ height: "clamp(240px, 45vw, 320px)" }}
                >
                  <img
                    src={eric}
                    alt="eric-card"
                    className="rounded-[10px] w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end flex-1 space-y-2 sm:space-y-3">
                <h3 className="font-haffer font-bold text-white text-[clamp(16px,3vw,20px)]">
                  {testimonials[1].name}, {testimonials[1].role} @{" "}
                  {testimonials[1].company}
                </h3>
                <p className="text-gray-300 font-haffer leading-relaxed text-[clamp(12px,2.5vw,14px)]">
                  {testimonials[1].quote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots (unchanged) */}
        <div className="flex justify-center lg:justify-end mt-6 sm:mt-8 lg:pr-6">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] rounded-full border mx-1 transition-all duration-300 ${
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
