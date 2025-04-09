import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  image: {
    borderRadius: "12px",
    width: "200px",
    marginBottom: "14px",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0 24px 0",
  },
  container: {
    display: "flex",
    gap: "64px",
    fontFamily: "Open Sans",
    marginBottom: "48px",
  },
  column1: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  column2: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    width: "100%",
  },
  row1: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  customAutocomplete: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "-webkit-fill-available",
  },
  item: {
   display: "flex",
   flexDirection: "column",
   gap: "8px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonsGroup1: {
    display: "flex",
    gap: "24px",
  },
  buttonsGroup2: {
    display: "flex",
    gap: "10px",
  },
  input: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "30px",
    padding: "2px 16px",
    fontFamily: "Open Sans",
    color: "#011532",
    width: "100%",
    "&:hover": {
      border: "1px solid #1E89D6 !important",
    },
    "&:focus-within": {
      border: "1px solid #1E89D6 !important",
    },
  },
  deleteButton: {
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    filter: "none",
  },
  tooltip: {
    padding: "8px 12px",
    backgroundColor: "white",
    color: "#011532",
    fontFamily: "Open Sans",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 400,
    filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.3))",
    borderRadius: "8px",
  },
}));