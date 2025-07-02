import React from "react";

interface DiagonalLineProps {
  className?: string;
  width?: number;
  height?: number;
}

const DiagonalLine: React.FC<DiagonalLineProps> = ({
  className = "",
  width = 1439,
  height = 232,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1439 232"
      fill="none"
      className={className}
      style={{ flexShrink: 0 }}
    >
      <path
        d="M1439 230.3H824.312L595.774 1.75293H0"
        stroke="url(#paint0_linear_2320_5936)"
        strokeWidth="2.445"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2320_5936"
          x1="0"
          y1="116.027"
          x2="1439"
          y2="116.027"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.5" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DiagonalLine;
