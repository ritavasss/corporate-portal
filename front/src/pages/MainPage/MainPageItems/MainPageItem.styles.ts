import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    minWidth: "280px",
    marginBottom: "48px",
    cursor: "pointer",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "29.26px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#011532",
    borderLeft: "6px solid #E88467",
    paddingLeft: "6px",
    marginBottom: "33px",
    marginTop: 0,
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    //maxWidth: "500px"
  },
  cardOutline: {
    zIndex: 100,
    width: "100%",
  },
  cardPicture: {
    position: "absolute",
    transition: "transform 0.7s ease",
    width: "100%",
    //maxWidth: "500px"
  },
}));
