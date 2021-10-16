import React from "react";

const ProudctLaunch = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.75 28.75"
      width={width ? width : 28}
      height={height ? height : 28}
    >
      <defs></defs>
      <g id="Layer_2" dataName="Layer 2">
        <g id="Layer_1-2" dataName="Layer 1">
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            d="m6.08 16.68.8-1.82C13.49.27 28.38.38 28.38.38s.09 12.52-11.17 19.69a26.66 26.66 0 0 1-3.32 1.8l-1.82.8"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            d="M9 11.12c-6.48 0-8 7.28-8 7.28h.71a8.62 8.62 0 0 1 6.08 2.52h0A8.62 8.62 0 0 1 10.35 27v.71s7.28-1.48 7.28-7.91"
          />
          <circle
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: ".75px",
            }}
            cx="17.01"
            cy="11.74"
            r="3.01"
          />
          <path
            d="M17 13.26a1.5 1.5 0 1 1 1.08-.44 1.55 1.55 0 0 1-1.08.44z"
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
            d="M27.15 7a6.14 6.14 0 0 1-3.62-1.76 6.14 6.14 0 0 1-1.76-3.64M3.54 21.55C-.4 25.51.45 28.3.45 28.3s2.79.85 6.75-3.09M6.58 22.19l-2.25 2.25"
          />
        </g>
      </g>
    </svg>
  );
};

export default ProudctLaunch;
