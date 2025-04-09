import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  "@global": {
    fontFamily: "Open Sans",
    letterSpacing: 0,
  },
  card: {
    display: "flex",
    width: "100%",
    gap: "12px",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "left",
    boxShadow: "0px 2px 16px rgba(0,0,0,0.1)",
  },
  image: {
    borderRadius: "12px",
    minWidth: "160px",
  },
  nameContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: 600,
    margin: 0,
  },
  status: {
    width: "120px",
    backgroundColor: "#DAF3DE",
    color: "#48B763",
    borderRadius: "30px",
    padding: "4px 12px",
    margin: 0,
    "&.active": {
      display: "none",
    },
  },
  description: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: 8,
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    ">p": {
      margin: 0,
    }
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(530px, 1fr))",
    gap: "16px",
    padding: "16px",
  },
  scrollContainer: {
    height: "100%",
    overflowY: "auto",

    "&::-webkit-scrollbar": {
      width: "6px !important",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#3798EA !important",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#2A7ACC !important",
    },
  },
}));