import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  mainPageContent: {
    padding: "47px 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
    gap: "32px",
    width: "100%",
    justifyItems: "center",
  },
}));
