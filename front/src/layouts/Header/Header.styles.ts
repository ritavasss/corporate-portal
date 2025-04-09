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

    "@media (max-width: 520px)": {
      padding: "0 20px",
    },
  },
  headerName: {
    fontFamily: "Montserrat",
    fontSize: "40px",
    cursor: "default",
    margin: 0,
  },
}));