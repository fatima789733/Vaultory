import React from "react";
import DiagonalLine from "./diagonal-line";
import Button from "../money-section/button";
import InstagramIcon from "../../assets/instagram.svg";
import GlobeIcon from "../../assets/globe.svg";
import MessageIcon from "../../assets/WhatsApp.svg";
import LinkedinIcon from "../../assets/linkedIn.svg";
import BinanceIcon from "../../assets/binance.svg";
import FooterBG from "../../assets/footer-bg.png";
import footerNav from "../../assets/footer-nav.png";
import useInView from "../../hooks/useInView";
import "../footer/footer-responsiveness.css";

const FooterSection: React.FC = () => {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      ref={ref}
      className="relative w-full bg-black overflow-hidden footer-section"
      style={{
        backgroundImage: `url(${FooterBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "60% auto",
      }}
    >
      <DiagonalLine className="absolute top-[16px] left-0 w-full h-auto z-0" />

      <div className="relative z-10 max-w-7xl mx-auto footer-main-content px-4 sm:px-6 py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h2
              className={`footer-title leading-tight font-haffer capitalize mb-8 sm:mb-10 md:mb-12 lg:mb-16 transition-all duration-1000 ${
                isInView ? "animate-fade-in-left" : "opacity-0 translate-x-10"
              }`}
              style={{
                fontSize: "clamp(36px, 9vw, 64px)",
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
              Get In <br /> Touch!
            </h2>

            {/* Social Icons */}
            <div className="social-icons flex items-center justify-center md:justify-start gap-4 sm:gap-5 md:gap-6 flex-wrap mb-6 md:mb-0">
              {[
                InstagramIcon,
                GlobeIcon,
                MessageIcon,
                LinkedinIcon,
                BinanceIcon,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="social-icon w-12 h-6 sm:w-14 sm:h-7 md:w-16 md:h-8 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center md:text-left md:justify-self-end lg:-translate-x-20 lg:-translate-y-4">
            <h2
              className={`footer-subtitle capitalize font-haffer leading-tight transition-all duration-1000 ${
                isInView ? "animate-fade-in-left" : "opacity-0 translate-x-10"
              }`}
              style={{
                fontSize: "clamp(26px, 6.5vw, 39px)",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "130%",
                background:
                  "linear-gradient(93deg, rgba(255, 255, 255, 0.40) 0%, #FFF 49.58%, rgba(255, 255, 255, 0.40) 99.17%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Join The <br /> Movement
            </h2>

            <p
              className={`footer-description mt-4 sm:mt-5 font-haffer capitalize px-2 sm:px-0 transition-all duration-1000 ${
                isInView
                  ? "animate-fade-in-left-delay"
                  : "opacity-0 translate-x-10"
              }`}
              style={{
                color: "rgba(255, 255, 255, 0.60)",
                fontSize: "clamp(14px, 3vw, 16px)",
                fontStyle: "normal",
                fontWeight: 430,
                lineHeight: "176%",
              }}
            >
              Unlock The Future Of Productivity With Vaultory.{" "}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Remember, This Journey Is Just Getting Started.
            </p>

            <div className="flex justify-center md:justify-start mt-6 sm:mt-8">
              <Button variant="primary" className="hero-button-primary">
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="footer-bottom-info relative z-10 border-t border-gray-800 pt-6 sm:pt-8 pb-4 sm:pb-6 text-center text-xs sm:text-sm text-white/60">
        <div className="footer-bottom-content max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 gap-4 lg:gap-0">
          <p className="order-2 lg:order-1 text-center lg:text-left">
            Copyright © 2025 Vaultory. All Rights Reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 order-1 lg:order-2">
            <a
              href="#"
              className="hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm"
            >
              Terms Of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm"
            >
              Privacy Policy
            </a>
          </div>
          <a href="#" className="order-3 mt-2 lg:mt-0">
            <img
              src={footerNav}
              alt="footer-navbar"
              className="footer-nav-image max-w-[80px] sm:max-w-[100px] md:max-w-none h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
