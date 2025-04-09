import { SvgIcon, SvgIconProps } from "@mui/material";

export function SortingIcon(props: SvgIconProps) {
  const { width, height, fill, ...otherProps } = props;
  return (
    <SvgIcon {...otherProps} style={{ height: height || "18px", width: width || "18px" }}>
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" 
            d="M18 3.875C18 3.25368 17.4963 2.75 16.875 2.75H1.125L0.993802 2.75757C0.434295 2.82255 0 3.29806 0 3.875C0 4.49632 0.503685 5 1.125 5H16.875L17.0062 4.99243C17.5658 4.92745 18 4.45194 18 3.875ZM11.25 8.375C11.8713 8.375 12.375 8.87866 12.375 9.5C12.375 10.0769 11.9408 10.5524 11.3812 10.6175L11.25 10.625H1.125C0.503685 10.625 0 10.1213 0 9.5C0 8.9231 0.434295 8.44756 0.993802 8.38254L1.125 8.375H11.25ZM5.625 14C6.24632 14 6.75 14.5037 6.75 15.125C6.75 15.7019 6.31571 16.1774 5.7562 16.2425L5.625 16.25H1.125C0.503685 16.25 0 15.7463 0 15.125C0 14.5481 0.434295 14.0726 0.993802 14.0075L1.125 14H5.625Z" 
            fill={props?.fill || "#95A1B2"}/>
      </svg>
    </SvgIcon>
  )
}