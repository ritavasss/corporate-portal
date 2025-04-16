import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(
  () => ({
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: "4px",
    },
    lable: {
      fontFamily: "Open Sans",
      color: "#888",
    },
    autocomplete: {
      ":hover .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #1E89D6",
      },
      "& .MuiOutlinedInput-root": {
        padding: "0px 11px",
      },
      "& .MuiAutocomplete-tag": { display: "none" },
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        height: "100%",
        borderRadius: "30px",
        fontFamily: "Open Sans",
        color: "#011532",
        "& fieldset": {
          borderRadius: "30px",
        },
        "&:hover fieldset": {
          border: "1px solid #3798EA",
        },
        "&.Mui-focused fieldset": {
          border: "1px solid #3798EA !important",
        },
      },
    },
    menuItem: {
      fontFamily: "Open Sans",
        color: "#011532",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "rgba(55, 152, 234, 0.08)",
        },
      "&.selected": {
        color: "#3798EA",
        backgroundColor: "rgba(55, 152, 234, 0.08)",
      },
    },
  })
);
