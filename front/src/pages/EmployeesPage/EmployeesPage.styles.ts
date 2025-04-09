import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "calc(-89px + 100svh)",
    boxSizing: "border-box",
    overflow: "hidden",
    padding: "40px 130px 20px 130px",
  },
  contentContainer: {
    flex: 1,
    border: "2px solid #3798EA",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
  },
  tab: {
    width: "149px",
    background: "#3798EA",
    color: "white",
    padding: "9px 16px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: "20px",
    cursor: "default",
  },
}));