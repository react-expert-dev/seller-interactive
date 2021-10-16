import React from "react";

const Reinstatement = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23.14 28.75"
      width={width ? width : 28}
      height={height ? height : 28}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            d="M10.72 6.61H.38v19.13A2.64 2.64 0 0 0 3 28.38h14.62v-16M9 11.76v7.51"
          />
          <circle
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            cx="9"
            cy="22.01"
            r=".2"
          />
          <circle
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            cx="17.41"
            cy="5.73"
            r="5.36"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            d="m15.22 3.54 4.38 4.38M19.6 3.54l-4.38 4.38"
          />
          <path
            d="M3 26.91h4.38l-5.54-5.54v4.37A1.17 1.17 0 0 0 3 26.91z"
            style={{ fill: "#ffc62a" }}
          />
        </g>
      </g>
    </svg>
  );
};

export default Reinstatement;
