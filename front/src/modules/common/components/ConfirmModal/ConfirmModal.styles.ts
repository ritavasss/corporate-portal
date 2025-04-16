import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  modal: {
    width: 480,
    backgroundColor: "white",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    padding: "24px 20px",
  },
  warningIcon: {
    marginTop: 15,
    width: 48,
    height: 48,
  },
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  warningHeaderText: {
    fontSize: 20,
    fontFamily: "Open Sans",
    fontWeight: 600,
  },
  warningText: {
    fontSize: 16,
    margin: 20,
    fontFamily: "Open Sans",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  cancelBtn: {
    backgroundColor: "#E4F4FF",
    "&:hover": {
      backgroundColor: "#E4F4FF",
    },
    borderRadius: "30px",
    color: "#3798EA",
    fontFamily: "Open Sans",
    textTransform: "none",
    width: "100px",
    marginRight: "20px",
  },
  applyBtn: {
    backgroundColor: "#3798EA",
    "&:hover": {
      backgroundColor: "#3798EA",
    },
    borderRadius: "30px",
    color: "white",
    fontFamily: "Open Sans",
    textTransform: "none",
    width: "100px",
  },
}));
