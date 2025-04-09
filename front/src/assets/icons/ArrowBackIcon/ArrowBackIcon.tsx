import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowBackIcon(props: SvgIconProps) {
  const { width, height, transform, ...otherProps } = props;
  return (
    <SvgIcon {...otherProps} style={{ width: width || "102px", height: height || "32px" }}>
      <svg width="105" height="36" viewBox="0 0 105 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M105 18H3M3 18L20.6538 2M3 18L20.6538 34" stroke="#FFFAF0" strokeWidth="3"/>
      </svg>
    </SvgIcon>
  )
}
