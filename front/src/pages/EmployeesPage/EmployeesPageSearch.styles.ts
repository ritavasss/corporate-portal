import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  controlsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "24px",
  },
  filterIcon: {
    background: "#F1F3F5 !important",
    border: "none !important",
    display: "flex",
    alignItems: "center",
    borderRadius: "30px",
    padding: "0 8px",
    height: "38px",
    marginLeft: "10px",
    "&.noBackground": {
      background: "none !important",
    },
  },
  chevronExpand: {
    transform: "rotate(180deg)",
  },
  searchInput: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "30px",
    padding: "0 10px 0 16px",
    height: "38px",
    fontFamily: "Open Sans",
    letterSpacing: 0,
    fontWeight: 400,
    fontSize: "16px",
    color: "#011532",
    width: "100%",
    marginRight: "36px",
    "&:hover": {
      border: "1px solid #1E89D6 !important",
    },
    "&:focus-within": {
      border: "1px solid #1E89D6 !important",
    },
    ":after, :before": {
      display: "none",
    }
  },
  searchIcon: {
    marginLeft: 8,
    cursor: "pointer",
  },
  viewButton: {
    width: "52px",
    minWidth: 0,
    height: "38px",
    padding: 0,
    marginLeft: "10px",
    backgroundColor: "#E4F4FF",
    borderRadius: "30px",
    cursor: "pointer",
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