import React, { useState, useRef } from "react";

const glowPoints = [
  { cx: 180, cy: 3 },
  { cx: 320, cy: 72 },
  { cx: 495, cy: 44 },
  { cx: 771, cy: 198 },
  { cx: 970, cy: 24 },
  { cx: 1198, cy: 153 },
];

const GlowingFlowPath: React.FC = () => {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="w-full py-[50px] bg-black flex items-center justify-center -translate-y-20">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="1400"
        height="320"
        viewBox="0 0 1400 320"
        fill="none"
        className="h-[350px]"
      >
        {/* Glowing path */}
        <path
          d="M1 142.086C93.5812 15.9602 154.559 -5.1665 194.407 2.33675C239.369 10.8082 247.429 53.8452 306.987 72.2057C379.28 94.4964 411.888 44.7745 487.403 44.106C627.014 42.8727 668.778 211.471 771.74 198.262C868.859 185.803 877.877 29.8717 970.92 23.9359C1062.61 18.0809 1111.84 165.818 1198.97 153.6C1246.63 146.915 1279.41 96.0409 1300 52.7502"
          stroke="#A4FFFF"
          strokeWidth="2"
          strokeMiterlimit={10}
          style={{
            mixBlendMode: "screen",
            filter: "url(#pathGlow)",
          }}
        />

        {/* Glowing circles */}
        {glowPoints.map((point, idx) => (
          <g key={idx}>
            <circle
              cx={point.cx}
              cy={point.cy}
              r="14"
              fill="rgba(100, 255, 100, 0.2)"
              className="pointer-events-none"
              filter="url(#greenShadow)"
            />

            <circle
              cx={point.cx}
              cy={point.cy}
              r="12"
              fill="#A4FFFF"
              stroke="#A4FFFF"
              strokeWidth="1"
              onMouseEnter={() => setHoveredCircle(idx)}
              onMouseLeave={() => setHoveredCircle(null)}
              className="transition-all duration-300 cursor-pointer"
              style={{
                filter:
                  hoveredCircle === idx
                    ? "url(#baseShadow) url(#glowEffect)"
                    : "url(#baseShadow)",
              }}
            />

            {hoveredCircle === idx && (
              <circle
                cx={point.cx}
                cy={point.cy}
                r="60"
                fill="url(#bigGlowGradient)"
                className="pointer-events-none"
                shapeRendering="geometricPrecision"
                style={{
                  filter: "blur(12px)",
                  borderRadius: "50%",
                  WebkitMaskImage:
                    "radial-gradient(circle, white 60%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle, white 60%, transparent 100%)",
                }}
              />
            )}

            {hoveredCircle === idx && (
              <circle
                cx={point.cx}
                cy={point.cy}
                r="25"
                fill="url(#smallGlowGradient)"
                className="pointer-events-none"
                shapeRendering="geometricPrecision"
                style={{
                  filter: "blur(6px)",
                  borderRadius: "50%",
                  WebkitMaskImage:
                    "radial-gradient(circle, white 60%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle, white 60%, transparent 100%)",
                }}
              />
            )}
          </g>
        ))}

        <defs>
          <filter id="baseShadow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="24" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="greenShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <radialGradient id="bigGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="50%" stopColor="rgba(164, 255, 255, 0.7)" />
            <stop offset="80%" stopColor="rgba(164, 255, 255, 0)" />
          </radialGradient>

          <radialGradient id="smallGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
            <stop offset="50%" stopColor="rgba(244, 247, 247, 0.9)" />
            <stop offset="70%" stopColor="rgba(164, 255, 255, 0)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GlowingFlowPath;
