import { SvgIcon, SvgIconProps } from "@mui/material";

export function TapeImg(props: SvgIconProps) {
  return (
    <SvgIcon {...props} style={{ width: "126px", height: "28px"}}>
      <svg width="134" height="32" viewBox="0 0 134 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_bd_128_436)">
      <rect x="4" y="-0.308594" width="126" height="28" fill="#383838" fill-opacity="0.05" shape-rendering="crispEdges"/>
      </g>
      <defs>
      <filter id="filter0_bd_128_436" x="0.9" y="-3.30859" width="132.2" height="35.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_128_436"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="1.55"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
      <feBlend mode="normal" in2="effect1_backgroundBlur_128_436" result="effect2_dropShadow_128_436"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_128_436" result="shape"/>
      </filter>
      </defs>
      </svg>
    </SvgIcon>
  )
}