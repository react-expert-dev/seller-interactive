import React from "react";

const AccountManagement = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.76 28.75"
      width={width ? width : 24}
      height={height ? height : 24}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: "0.75px",
            }}
            d="M16.2 19.48a3.52 3.52 0 0 1-2.14-.32 3.61 3.61 0 0 1-1.74-1.87 2.28 2.28 0 0 0 1.16-1c1.21-1.93.43-4.65 1.63-6.6a5.16 5.16 0 0 1 4.4-2.47h.58a5.16 5.16 0 0 1 4.39 2.47c1.2 2 .41 4.67 1.63 6.6a2.26 2.26 0 0 0 1.15 1 3.57 3.57 0 0 1-1.74 1.87 3.52 3.52 0 0 1-2.14.32"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: "0.75px",
            }}
            d="M21.4 19.48a3 3 0 0 0 2.5 2.29c.72.21 1.45.4 2.17.6a2.3 2.3 0 0 1 1.58 1.55l.71 3.42a.86.86 0 0 1-.84 1H12.08a.87.87 0 0 1-.84-1l.76-3.42a2.28 2.28 0 0 1 1.58-1.55c.72-.2 1.45-.39 2.17-.6a3.06 3.06 0 0 0 2.5-2.29"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: "0.75px",
            }}
            d="M23.75 14.15a13.6 13.6 0 0 1-1.54 4.45 2.93 2.93 0 0 1-2.43 1.4 2.9 2.9 0 0 1-2.42-1.39 9.57 9.57 0 0 1-1.47-4c-.47-3.56 3.33-3.66 5.63-1.93a20.14 20.14 0 0 0 2.23 1.49M11.92 8.97H4.5M11.92 6.89H4.5M11.48 21.36H1.72v-2.1M16.05 1.94h2.32V5.8M16.05 6.72V.38h-4.06"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: "0.75px",
            }}
            d="M11.99.38H.38v18.88h11.1"
          />
          <path
            style={{
              fill: "none",
              stroke: "#202020",
              strokeMiterlimit: 10,
              strokeWidth: "0.75px",
            }}
            d="M10.12 1.26v.31a.51.51 0 0 1-.51.52H6.82a.52.52 0 0 1-.52-.52v-.31"
          />
          <path
            d="m16.09 23-1.22.33-1 .26a1 1 0 0 0-.64.62L12.64 27H27l-.59-2.79a1 1 0 0 0-.65-.62l-1-.26-1.21-.33a5.26 5.26 0 0 1-7.42 0z"
            style={{ fill: color ? color : "#ffc62a" }}
          />
        </g>
      </g>
    </svg>
  );
};

export default AccountManagement;
