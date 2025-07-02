import homeGlow from "../../assets/Ellipse.png"; // adjust path if needed
import Button from "../money-section/button";
// import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-center mt-2 px-5 py-6 lg:px-12">
      <div
        className="hidden lg:flex items-center space-x-4 rounded-full px-6 py-2"
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
        {["Home", "Why us?", "Cases", "Features", "Pricing", "FAQ"].map(
          (item) => {
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
          }
        )}
      </div>

      <div className="absolute right-6 top-1/2-translate-y-1/2 rounded-full sm:15px ">
        <Button variant="primary">Book a Demo</Button>
      </div>
    </nav>
  );
}
