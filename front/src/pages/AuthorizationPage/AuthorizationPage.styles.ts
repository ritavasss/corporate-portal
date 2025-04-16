import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  contentContainer: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  backButton: {
    "> a": {
      marginBottom: "20px",
    },
  },
  authorizationContainer: {
    width: 600,
    borderRadius: "10px",
    padding: "48px 100px 32px",
    textAlign: "left",
    boxShadow: "0px 2px 16px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
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
    },
  },
  description: {
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: "14px",
    color: "rgba(0, 0, 0, 0.4)",
    marginBottom: "8px",
  },
  button: {
    marginTop: "24px",
    color: "white",
    backgroundColor: "#3798EA",
    borderRadius: "30px",
    width: "100%",
    height: "40px",
    textTransform: "none",
    fontFamily: "Open Sans",
    fontSize: "16px",
  },
}));