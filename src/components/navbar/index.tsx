import { useState } from "react";
import homeGlow from "../../assets/Ellipse.png"; // adjust path if needed
import Button from "../money-section/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "Why us?", "Cases", "Features", "Pricing", "FAQ"];

  return (
    <nav className="relative flex items-center justify-between mt-10 md:mt-2 px-5 py-6 lg:px-12">
      {/* Desktop Navigation */}
      <div
        className="hidden lg:flex items-center space-x-4 rounded-full px-6 py-2 mx-auto"
        style={{
          width: "517px",
          height: "42px",
          flexShrink: 0,
          borderRadius: "100px",
          borderTop: "1px solid #A4FFFF",
          borderLeft: "1px solid #A4FFFF",
          borderRight: "1px solid #A4FFFF",
          borderBottom: "1px solid rgba(164, 255, 255, 0.2)",
          background:
            "linear-gradient(90deg, rgba(164, 255, 255, 0.52) -96.63%, rgba(80, 132, 135, 0.05) 98.46%)",
          boxShadow: "inset 3px 3px 4.1px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(21px)",
        }}
      >
        {navItems.map((item) => {
          const isHome = item === "Home";

          return (
            <div key={item} className="relative">
              <a
                href="#"
                className={`text-[13px] text-center font-haffer px-3 py-1 rounded-full hover:bg-gray-500/30 transition-colors hover:text-aquamarine ${
                  isHome ? "text-white font-bold" : ""
                }`}
                style={{
                  color: isHome ? undefined : "rgba(255, 255, 255, 0.5)",
                  fontStyle: "normal",
                  fontWeight: isHome ? 700 : 430,
                  lineHeight: "normal",
                }}
              >
                <span className="whitespace-nowrap">{item}</span>
              </a>

              {isHome && (
                <img
                  src={homeGlow}
                  alt="highlight"
                  className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-[60px] h-[22px] pointer-events-none select-none opacity-100 z-0"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-between w-full">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-gray-500/30 transition-colors"
          style={{
            borderTop: "1px solid #A4FFFF",
            borderLeft: "1px solid #A4FFFF",
            borderRight: "1px solid #A4FFFF",
            borderBottom: "1px solid rgba(164, 255, 255, 0.2)",
            background:
              "linear-gradient(90deg, rgba(164, 255, 255, 0.52) -96.63%, rgba(80, 132, 135, 0.05) 98.46%)",
            backdropFilter: "blur(21px)",
          }}
        >
          {isMenuOpen ? (
            <X size={24} color="rgba(255, 255, 255, 0.8)" />
          ) : (
            <Menu size={24} color="rgba(255, 255, 255, 0.8)" />
          )}
        </button>

        {/* Mobile CTA Button */}
        <div className="ml-4">
          <Button variant="primary" className="hero-button-primary">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rounded-full">
        <Button variant="primary" className="hero-button-primary">
          Book a Demo
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-black/80 backdrop-blur-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-500/30 transition-colors"
              >
                <X size={24} color="rgba(255, 255, 255, 0.8)" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {navItems.map((item) => {
                const isHome = item === "Home";

                return (
                  <div key={item} className="relative">
                    <a
                      href="#"
                      onClick={toggleMenu}
                      className={`block text-lg font-haffer py-3 px-4 rounded-lg hover:bg-gray-500/30 transition-colors hover:text-aquamarine ${
                        isHome ? "text-white font-bold" : ""
                      }`}
                      style={{
                        color: isHome ? undefined : "rgba(255, 255, 255, 0.7)",
                        fontStyle: "normal",
                        fontWeight: isHome ? 700 : 430,
                        lineHeight: "normal",
                      }}
                    >
                      {item}
                    </a>

                    {isHome && (
                      <img
                        src={homeGlow}
                        alt="highlight"
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-[20px] h-[20px] pointer-events-none select-none opacity-70"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
