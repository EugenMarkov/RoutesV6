import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

import { logOutSuccess } from "../../../store/actions";

import useStyles from "./useStyles";

/**
 * @desc function for create logout ui
 * @returns {JSX.Element}
 */
const LogoutButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutSuccess());
  };

  return (
    <Button
      className={classes.logout_btn}
      variant="text"
      sx={{ height: 56, justifyContent: "flex-start", fontSize: 16, padding: "16px", borderRadius: "8px" }}
      onClick={logOut}
    >
      <LogoutIcon className={classes.btn_icon} />
      Logout
    </Button>
  );
};

export default LogoutButton;
