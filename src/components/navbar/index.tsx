import { useRef, useState, MouseEvent } from "react";
import homeGlow from "../../assets/Ellipse.png"; // adjust path if needed

import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Tracking Mouse Position
  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  // Calculating Glow Direction (Shadow Offset)
  const buttonCenter = {
    x: buttonRef.current ? buttonRef.current.offsetWidth / 2 : 0,
    y: buttonRef.current ? buttonRef.current.offsetHeight / 2 : 0,
  };
  const glowOffset = {
    x: pos.x - buttonCenter.x,
    y: pos.y - buttonCenter.y,
  };

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
                  className={`text-[13px] text-center font-haffer px-3 py-1 rounded-full hover:bg-white/10 transition-colors hover:text-aquamarine ${
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

      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          className="relative overflow-hidden px-4 py-3 rounded-full text-black font-semibold bg-teal-300 shadow-lg flex items-center space-x-2 group min-w-[180px]"
          style={{
            boxShadow: isHovering
              ? `${glowOffset.x / 8}px ${
                  glowOffset.y / 8
                }px 20px rgba(94, 234, 212, 0.6), ${glowOffset.x / 4}px ${
                  glowOffset.y / 4
                }px 30px rgba(94, 234, 212, 0.4)`
              : "0 5px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Big Soft Glow (Follows Cursor) */}
          <span
            className={`absolute w-[550px] h-32 -translate-x-1/2 -translate-y-1/2 rounded-l pointer-events-none ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: pos.y,
              left: pos.x,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(94, 234, 212, 0.7) 50%, rgba(94, 234, 212, 0) 80%)",
              filter: "blur(20px)",
            }}
          ></span>
          {/* Small Bright Spot (Inner Glow) */}
          <span
            className={`absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-200 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: pos.y,
              left: pos.x,
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(244, 247, 247, 0.9) 50%, rgba(94, 234, 212, 0) 70%)",
              filter: "blur(10px)",
            }}
          ></span>
          <span className="relative z-10 font-haffer flex items-center justify-center w-full space-x-2">
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </nav>
  );
}
