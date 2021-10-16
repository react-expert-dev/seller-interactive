import React from "react";

const Refund = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.36 28.75"
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
            d="M10.77 16.21a1.56 1.56 0 1 0 3.11 0c0-.86-.64-1.26-1.56-1.56s-1.55-.7-1.55-1.56a1.56 1.56 0 1 1 3.11 0M12.32 10.66v.88M12.32 17.77v.88"
          />
          <circle
            cx="12.32"
            cy="14.65"
            r="7.6"
            style={{
              strokeLinejoin: "round",
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeWidth: "0.75px",
            }}
          />
          <path
            d="M12.32 21a6.37 6.37 0 1 1 6.38-6.37A6.38 6.38 0 0 1 12.32 21zm0-11.89a5.52 5.52 0 1 0 5.52 5.52 5.52 5.52 0 0 0-5.52-5.5z"
            style={{ fill: "#ffc62a" }}
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            d="M1.81 10.05a11 11 0 0 0 0 10.87 11 11 0 0 0 9.47 5.34M11.4 24.15l2.16 2.15-2.07 2.08M22.55 18.7a11 11 0 0 0 0-10.87 11 11 0 0 0-9.47-5.34M12.96 4.6 10.8 2.45 12.87.38"
          />
        </g>
      </g>
    </svg>
  );
};

export default Refund;
