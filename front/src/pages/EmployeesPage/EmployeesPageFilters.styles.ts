import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  filtersContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
    gap: "48px",
  },
  filters: {
    display: "flex",
    gap: "24px",
    width: "100%",
  },
  buttonsContainer: {
    display: "flex",
    gap: "10px",
    alignSelf: "end",
    height: "38px",
  },
  applyButton: {
    backgroundColor: "#3798EA",
    borderRadius: "30px",
    color: "white",
    fontFamily: "Open Sans",
    textTransform: "none",
    padding: "5px 10px",
  },
  resetButton: {
    backgroundColor: "#E4F4FF",
    borderRadius: "30px",
    color: "#3798EA",
    fontFamily: "Open Sans",
    textTransform: "none",
    padding: "5px 10px",
  }
}));