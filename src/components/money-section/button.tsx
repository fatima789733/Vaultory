import React, { useRef, useState, MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const buttonCenter = {
    x: (buttonRef.current?.offsetWidth ?? 0) / 2,
    y: (buttonRef.current?.offsetHeight ?? 0) / 2,
  };

  const glowOffset = {
    x: pos.x - buttonCenter.x,
    y: pos.y - buttonCenter.y,
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        className={`relative overflow-hidden px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 group min-w-[180px] text-black ${
          variant === "primary"
            ? "bg-teal-300"
            : "border border-white text-white bg-transparent"
        }`}
        style={{
          boxShadow: isHovering
            ? `${glowOffset.x / 12}px ${
                glowOffset.y / 12
              }px 16px rgba(94, 234, 212, 0.5), 
               ${glowOffset.x / 18}px ${
                glowOffset.y / 18
              }px 24px rgba(94, 234, 212, 0.3)`
            : "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Large Soft Glow */}
        <span
          className={`absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: pos.y,
            left: pos.x,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(94, 234, 212, 0.6) 50%, rgba(94, 234, 212, 0) 80%)",
            filter: "blur(28px)",
          }}
        ></span>

        {/* Inner Bright Spot */}
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

        <span className="relative z-10 flex items-center space-x-2">
          <span>{children}</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
};

export default Button;
