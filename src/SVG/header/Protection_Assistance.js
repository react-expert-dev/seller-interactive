import React from "react";

const ProtectionAssistance = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25.72 28.9"
      width={width ? width : 28}
      height={height ? height : 28}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            d="m8.01 14.47 4.28 3.82 6.17-7.55"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            d="M25.2 4A16.25 16.25 0 0 1 12.86.51 16.25 16.25 0 0 1 .52 4s-2.38 20.16 12.34 24.51C27.58 24.16 25.2 4 25.2 4z"
          />
          <path
            d="M12.86 8a38.31 38.31 0 0 1 10.08 1.32C23 8.1 23.05 7 23 6.13a19 19 0 0 1-10.17-3 19 19 0 0 1-10.17 3c0 .88 0 2 .08 3.19A38.45 38.45 0 0 1 12.86 8z"
            style={{ fill: "#ffc62a" }}
          />
        </g>
      </g>
    </svg>
  );
};

export default ProtectionAssistance;
