import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(
  () => ({
    customDate: {
      display: "flex",
      flexDirection: "column",

      "&.readOnly": {
        ".MuiInputBase-root": {
          paddingTop: "3px !important",
          "&.MuiOutlinedInput-root": {
            alignItems: "start",
          },
        },
        "fieldset": {
          background: "unset",
          border: "unset",

          "&.MuiOutlinedInput-notchedOutline": {
            borderColor: "white !important",
          },

          "&::placeholder": {
            color: "#888 !important",
          }
        },
        ".MuiOutlinedInput-root": {
          "input": {
            padding: "0px !important",
            position: "relative",
            backgroundColor: "unset",
          }
        },
        ".MuiIconButton-root svg": {
          display: "none",
        },
      },
      ".MuiFormLabel-root": {
        color: "#888 !important",
      },
    },
    customDateFormControl: {
      width: "100%",
    },
    customDateLabel: {
      color: "#888",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    },
    datePicker: {
      margin: "6px 0 0 0 !important",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexDirection: "column",
      width: "100%",
      font: "Open Sans",
      "&.readOnly": {
          minHeight: "28px !important",
        },
      "& > .MuiInputBase-input": {
        paddingRight: "0px !important",
      },
      ".MuiOutlinedInput-root": {
        borderRadius: "30px",
        "&:hover fieldset": {
          borderColor: "#1E89D6 !important",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#1E89D6 !important",
          borderWidth: "1px !important",
        },
      },
      "&>div>fieldset": {
        borderColor: "rgba(0, 0, 0, 0.23) !important",
      },
      "&>div": {
        width: "100%",
        paddingRight: "8px",

        ".MuiInputBase-input": {
          padding: "9px 16px !important",
          margin: "0px !important",
          border: "none !important",
          height: "20px !important",
          color: "#011532 !important",
        },

        ".MuiIconButton-root": {
          marginRight: "0px",
          maxHeight: "36px",
          maxWidth: "36px",
          zIndex: 5,
        },
      },
    },
    textField: {
      fontSize: "14px",
      "&>div>input": {
        padding: "8px 0px 8px 8px !important",
      },
    },
    day: {
      fontSize: "14px",
      fontWeight: "400",
      "&.Mui-selected": {
        backgroundColor: "#1E89D6 !important",
        "&:hover": {
          backgroundColor: "#1E89D6 !important",
        },
      },
    },
    layout: {
      "&>div>div>div:last-of-type": {
        "&>div>div>div>span": {
          fontSize: "12px",
          fontWeight: "400",
        },
      },
    },
  })
);
