import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  buttonContainer: {
    display: "inline-block",
    marginBottom: "40px",
  },
  backButton: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    borderRadius: "100px",
    backgroundColor: "#FFA72E",
    alignContent: "center",
    justifyContent: "center",
  },
}));