import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={158}
    height={24}
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="#e3e3e3"
      fillOpacity={0.11}
      d="M64 4h10v10H64V4zm20 0h10v10H84V4zm20 0h10v10h-10V4zm20 0h10v10h-10V4zm20 0h10v10h-10V4zM4 4h10v10H4V4zm20 0h10v10H24V4zm20 0h10v10H44V4z"
    />
    <path
      fill="#bdbdbd"
      fillOpacity={0.26}
      d="M144 14V4h10v10h-10zm9-9h-8v8h8V5zm-29 9V4h10v10h-10zm9-9h-8v8h8V5zm-29 9V4h10v10h-10zm9-9h-8v8h8V5zm-29 9V4h10v10H84zm9-9h-8v8h8V5zm-29 9V4h10v10H64zm9-9h-8v8h8V5zm-29 9V4h10v10H44zm9-9h-8v8h8V5zm-29 9V4h10v10H24zm9-9h-8v8h8V5zM4 14V4h10v10H4zm9-9H5v8h8V5z"
    />
    <g>
      <path
        fill="#d9d9d9"
        fillOpacity={0.15}
        d="M-58 16V2h14v14h-14zm13-13h-12v12h12V3z"
      />
      <path fill="#9c9c9c" fillOpacity={0.39} d="M-40 0h18v18h-18z" />
      <path
        fill="#b2b2b2"
        fillOpacity={0.3}
        d="M-40 18V0h18v18h-18zm17-17h-16v16h16V1z"
      />
      <path fill="#9c9c9c" fillOpacity={0.39} d="M-20 0h18v18h-18z" />
      <path
        fill="#4c4c4c"
        fillOpacity={0.7}
        d="M-20 18V0h18v18h-18zM-3 1h-16v16h16V1z"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="20 0;40 0;60 0;80 0;100 0;120 0;140 0;160 0;180 0;200 0"
        calcMode="discrete"
        dur="2000ms"
        repeatCount="indefinite"
      />
    </g>
  </svg>
)

export default SvgComponent
