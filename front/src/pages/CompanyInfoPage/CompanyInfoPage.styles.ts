import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  sectionContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    width: "100%",
    gap: "32px",
    margin: "0 0 48px 0"
  },
  section1: {
    flex: 1,
    p: {
      fontFamily: "Open Sans",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      margin: "24px 0",
    },
    a: {
      display: "flex",
      justifyContent: "center",
      textDecoration: "none",
    },
  },
  section2: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  button: {
    display: "flex",
    width: "530px",
    height: "87px",
    borderRadius: "100px",
    backgroundColor: "#3798EA",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
}))