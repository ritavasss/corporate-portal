import { SvgIconProps } from "@mui/material";

export function CheckIcon(props: SvgIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_2916_8171)">
        <path d="M15.9062 5.56641C16.1797 5.83984 16.1797 6.25 15.9062 6.49609L8.6875 13.7148C8.44141 13.9883 8.03125 13.9883 7.78516 13.7148L4.06641 9.99609C3.79297 9.75 3.79297 9.33984 4.06641 9.06641C4.3125 8.82031 4.72266 8.82031 4.96875 9.06641L8.25 12.3477L15.0039 5.56641C15.25 5.32031 15.6602 5.32031 15.9062 5.56641Z" fill={props?.fill || "#95A1B2"} />
      </g>
      <defs>
        <clipPath id="clip0_2916_8171">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}