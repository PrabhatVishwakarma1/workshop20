import React from "react";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { useStyles } from "./headerStyle";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";

function Header() {
  const classes = useStyles();

  return (
    <Paper>
      <div className={classes.headerMain}>
        <ul className={classes.leftSide}>
          <li className={classes.li}>
            <img className={classes.img} src="logo.png" alt="logoImage"></img>
          </li>

          <li className={(classes.li, classes.sli)}>PATIENTS</li>

          <li className={classes.li}>CALENDER</li>

          <li className={classes.li}>USERS</li>

          <li className={classes.li}>BILLING</li>
        </ul>

        <div className={classes.rightSide}>
          <NotificationsSharpIcon
            fontSize="large"
            className={classes.notificatioIcon}
          />
          <Avatar>L</Avatar>
        </div>
      </div>
    </Paper>
  );
}

export default Header;
