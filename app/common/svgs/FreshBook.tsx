import React from "react";

type Props = {};

const FreshBook = (props: Props) => {
  return (
    <svg
      width="116"
      height="28"
      viewBox="0 0 116 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_2017_4523"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="116"
        height="28"
      >
        <rect
          x="0.979004"
          width="114.074"
          height="28"
          fill="url(#pattern0_2017_4523)"
        />
      </mask>
      <g mask="url(#mask0_2017_4523)">
        <g style={{ mixBlendMode: "multiply" }}>
          <rect
            x="127"
            y="-100"
            width="319"
            height="159"
            transform="rotate(90 127 -100)"
            fill="#2E0708"
          />
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0_2017_4523"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_2017_4523"
            transform="scale(0.00454545 0.0185185)"
          />
        </pattern>
        <image
          id="image0_2017_4523"
          width="220"
          height="54"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default FreshBook;
