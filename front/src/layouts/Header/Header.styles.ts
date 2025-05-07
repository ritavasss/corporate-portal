import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  header: { 
    height: "89px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 1000,
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "0 130px",

    "> svg": {
      cursor: "pointer",
    },
    "@media (max-width: 520px)": {
      padding: "0 20px",
    },
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
  loginButton: {
    "> svg": {
      width: "20px",
      height: "20px",
    },
    "&.isNotAuthenticated": {
      transform: "rotate(180deg)",
    },
  },
  logoutButton: {
    minWidth: "84px",
    textTransform: "none",
    fontFamily: "Open Sans",
    color: "#011532",
  },
  logoutWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "relative",
  },
  logoutButtonContainer: {
    position: "absolute",
    right: 0,
    top: "100%",
    zIndex: 1,
    backgroundColor: "white",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "4px",
  },
  headerName: {
    fontFamily: "Montserrat",
    fontSize: "40px",
    cursor: "default",
    margin: 0,
  },
}));