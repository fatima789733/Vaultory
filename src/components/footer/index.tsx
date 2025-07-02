import React from "react";
import DiagonalLine from "./diagonal-line";
import Button from "../money-section/button";
import InstagramIcon from "../../assets/instagram.svg";
import GlobeIcon from "../../assets/globe.svg";
import MessageIcon from "../../assets//WhatsApp.svg";
import LinkedinIcon from "../../assets/linkedIn.svg";
import BinanceIcon from "../../assets/binance.svg";
import FooterBG from "../../assets/footer-bg.png"; // Replace with your actual path
import footerNav from "../../assets/footer-nav.png";
const FooterSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${FooterBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "60% auto", // ⬅️ Half the section width
      }}
    >
      {/* Diagonal Line */}
      <DiagonalLine className="absolute top-[16px] left-0 w-full h-auto z-0" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2
            className="leading-tight font-haffer capitalize mb-24"
            style={{
              fontSize: "64px",
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
          <div className="flex items-center gap-6 ">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-16 h-8 object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={GlobeIcon}
                alt="Website"
                className="w-16 h-8 object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={MessageIcon}
                alt="Message"
                className="w-16 h-8 object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-16 h-8 object-contain"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={BinanceIcon}
                alt="BinanceIcon"
                className="w-16 h-8 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className=" justify-self-end -translate-x-20 -translate-y-4">
          <h2
            className="capitalize font-haffer leading-tight"
            style={{
              fontSize: "39px",
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
            Join The <br />
            Movement
          </h2>

          <p
            className="mt-3 font-haffer capitalize"
            style={{
              color: "rgba(255, 255, 255, 0.60)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 430,
              lineHeight: "176%",
            }}
          >
            Unlock The Future Of Productivity With Vaultory. <br />
            Remember, This Journey Is Just Getting Started.
          </p>

          <div className="mt-6">
            <Button variant="primary">Start Now</Button>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="relative z-10 border-t border-gray-800 pt-8 pb-6  text-center text-sm text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p>Copyright © 2025 Vaultory. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Terms Of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
          <a href="#">
            <img src={footerNav} alt="footer-navbar" />
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
