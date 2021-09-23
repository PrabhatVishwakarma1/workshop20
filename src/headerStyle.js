import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  leftSide: {
    //backgroundColor: "#FFFFFF",
    width: "550px",
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    justifyContent: "space-between",
    marginLeft: "-50px",
    marginTop: "-.5px",
    height: "70px",
  },

  headerMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "70px",
    backgroundColor: "#FFFFFF",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "50px",
  },
  notificatioIcon: {
    margin: "11px",
  },

  li: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#0F0F0F",
    fontSize: "12px",
    fontWeight: "bold",
    width: "110px",
  },
  sli: {
    backgroundColor: "#00A0F0",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "110px",
  },
});
