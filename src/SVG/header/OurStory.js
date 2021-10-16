import React from "react";

const OurStory = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.49 28.75"
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
              strokeWidth: ".75px",
              strokeLinejoin: "round",
            }}
            d="M2.89 2.4v3.95l1.49-.91 1.5.91V.38"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeWidth: ".75px",
              strokeLinejoin: "round",
            }}
            d="M2.11.38A1.72 1.72 0 0 0 .38 2.11v24.65A1.72 1.72 0 0 1 2.11 25h18V.38z"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeWidth: ".75px",
              strokeLinejoin: "round",
            }}
            d="M.38 26.76h0A1.62 1.62 0 0 0 2 28.38h16.7V25M6.45 18.24h7.59M6.45 21.02h7.59"
          />
          <path style={{ fill: "#ffc62a" }} d="m12 1.71 6.78 12.27V1.71H12z" />
          <path
            d="m10 15.47.5.4.5-.4 2.27-1.91a2.57 2.57 0 0 0 .9-2.4 2.16 2.16 0 0 0-.2-.51 1.91 1.91 0 0 0-3.47.18 2 2 0 0 0-2.1-1.18 2 2 0 0 0-1.41 1 2.16 2.16 0 0 0-.2.51 2.57 2.57 0 0 0 .9 2.4L10 15.47"
            style={{
              fill: "none",
              stroke: "#202020",
              strokeLinecap: "round",
              strokeWidth: ".75px",
              strokeMiterlimit: 10,
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default OurStory;
