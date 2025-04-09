import { SvgIcon, SvgIconProps } from "@mui/material";

export function FolderImg(props: SvgIconProps) {
  const { width, height, ...otherProps } = props;
  return (
    <SvgIcon {...otherProps} style={{ width: width || "126px", height: height || "28px"}}>
      <svg width="186" height="152" viewBox="0 0 186 152" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 8.99999V142.829C1 147.247 4.58172 150.829 9 150.829H177C181.418 150.829 185 147.247 185 142.829V30.6857C185 26.2674 181.418 22.6857 177 22.6857H90.7895C88.4401 22.6857 86.2095 21.653 84.6894 19.8615L71.082 3.82418C69.562 2.03273 67.3313 1 64.9819 1H9C4.58172 1 1 4.58172 1 8.99999Z" fill="#E4F4FF" stroke="#3798EA" strokeWidth="2"/>
      </svg>
    </SvgIcon>
  )
}