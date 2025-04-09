import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({

  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "8px",
    borderSpacing: "0",
    "> thead > tr": {
      borderBottom: "1px solid #3797E9",
      backgroundColor: "#E4F4FF",
      height: "54.25px",
      position: "sticky",
      top: "0",
      zIndex: "100",
      "> th": {
        padding: "8px 12px",
        textAlign: "left",
        fontFamily: "Open Sans",
        fontSize: "18px",
        fontWeight: 600,
      },
    },
    "> tbody > tr": {
      height: "24px",
      "> td": {
        height: "24px",
        padding: "16px 12px",
        verticalAlign: "middle",
        fontFamily: "Open Sans",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "28px",
      },
    },
  },
  status: {
    backgroundColor: "#DAF3DE",
    color: "#48B763",
    borderRadius: "30px",
    padding: "4px 12px",
    fontSize: "14px",
    "&.active": {
      display: "none",
    },
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
  tabContainer: {
    width: "100%",
  },
  tab: {
    marginLeft: "95.5px",
    width: "149px",
    background: "#2196F3",
    color: "white",
    padding: "10px 20px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    fontSize: "18px",
  },
  tooltip: {
    minWidth: "200px",
    padding: "12px 12px",
    backgroundColor: "white",
    color: "#011532",
    fontFamily: "Open Sans",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.3))",
    borderRadius: "8px",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    padding: "8px 24px",
    justifyContent: "space-between",
    fontFamily: "Open Sans",
    borderTop: "1px solid #3797E9",

    "& button": {
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      color: "#3798EA",
      borderRadius: "30px",
      "&:disabled": {
        opacity: 0.5,
      },
    },
    "& select": {
      padding: "5px",
      border: "1px solid #ddd !important",
      borderRadius: "30px",
      fontSize: "14px",
      "&:focus": {
        border: "1px solid #2196F3 !important",
      },
    },
  },
  buttons: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    "& button": {
      padding: "1px 4px",
    },
    "& span": {
      padding: "1px 8px",
    }
  },
  pageSizeContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  pageSize: {
    width: "70px", 
    "& .MuiOutlinedInput-root": {
      fontSize: "14px",
      paddingLeft: "10px !important",
    },
  },
}));