import React from "react";

const OurTeam = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.62 28.5"
      width={width ? width : 28}
      height={height ? height : 28}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            style={{ fill: "none", stroke: "#202020", strokeMiterlimit: 10 }}
            d="M34.14 6.58A6.08 6.08 0 1 1 28.07.5a6.07 6.07 0 0 1 6.07 6.08zM23.92 13.67l-2.63 2.4a4 4 0 0 0-1.28 3v9.43M32.22 13.67l2.63 2.4a4.07 4.07 0 0 1 1.27 3v9.43"
          />
          <path
            style={{ fill: "#ffc62a" }}
            d="m26.63 14.23-1.44 6.05 2.88 2.88 2.88-2.88-1.44-6.05-1.44 1.38-1.44-1.38z"
          />
          <path
            style={{ fill: "none", stroke: "#202020", strokeMiterlimit: 10 }}
            d="M14.63 6.58A6.08 6.08 0 1 1 8.55.5a6.08 6.08 0 0 1 6.08 6.08zM4.4 13.67l-2.63 2.4a4.07 4.07 0 0 0-1.27 3v9.43M12.7 13.67l2.63 2.4a4 4 0 0 1 1.28 3v9.43"
          />
          <path
            style={{ fill: "#ffc62a" }}
            d="m7.11 14.23-1.44 6.05 2.88 2.88 2.88-2.88-1.44-6.05-1.44 1.38-1.44-1.38z"
          />
        </g>
      </g>
    </svg>
  );
};

export default OurTeam;
