import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  logout_btn: {
    width: 186,
    "&:hover": {
      backgroundColor: "#FEE2E2 !important",
    },
  },
  btn_icon: {
    marginRight: 13,
  },
}));

export default useStyles;
