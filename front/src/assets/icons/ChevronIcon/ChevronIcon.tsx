import { SvgIcon, SvgIconProps } from "@mui/material";

export function ChevronIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.24062 14.2223L11.4466 8.27604C11.6249 8.10067 11.8198 8 12.0146 8C12.2095 8 12.4034 8.07206 12.5534 8.21719L18.7594 14.1634C19.071 14.4606 19.0811 14.9539 18.7828 15.2643C18.4864 15.5769 17.991 15.5871 17.6815 15.2877L12.0146 9.88681L6.31847 15.3427C6.00996 15.6421 5.51374 15.6319 5.21724 15.3193C4.91885 15.0114 4.92899 14.5178 5.24062 14.2223Z" fill={props?.fill || "#95A1B2"} />
    </SvgIcon>
  );
}
