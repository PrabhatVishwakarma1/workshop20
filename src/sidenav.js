import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useStyles } from "./sidenavStyle";

export default function SideNav() {
  const classes = useStyles();
  return (
    <Paper style={{ background: "#E8F5FE" }} className={classes.mainDiv}>
      <span className={classes.span}>Patients</span>

      <Paper>
        <div className={classes.eachGrid1}>
          <span className={classes.paper}>
            <Grid>
              <img className={classes.user1} src="user1.png" alt="img" />
            </Grid>

            <Grid>
              <span className={classes.typo1}> Sara Smith </span>
              <span className={classes.typo2}> 15 Aug 2020 </span>
            </Grid>
          </span>

          <Grid className={classes.dot}>
            <img style={{ height: "15px" }} alt="dot" src="green dot.png" />
          </Grid>
        </div>
      </Paper>
      <Paper className={classes.eachGrid}>
        <span className={classes.paper}>
          <Grid>
            <img src="user2.png" alt="img" />
          </Grid>

          <Grid>
            <span className={classes.typo1}>James Johnson</span>
            <span className={classes.typo2}>No Clearance</span>
          </Grid>
        </span>
        <Grid className={classes.dot}>
          <img style={{ height: "20px" }} alt="dot" src="red dot.png" />
        </Grid>
      </Paper>

      <Paper className={classes.eachGrid}>
        <span className={classes.paper}>
          <Grid>
            <img src="user3.png" alt="img" />
          </Grid>
          <Grid>
            <span className={classes.typo1}>Patrice Page</span>
            <span className={classes.typo2}>19 Aug 2020</span>
          </Grid>
        </span>
        <Grid className={classes.dot}>
          <img style={{ height: "15px" }} alt="dot" src="green dot.png" />
        </Grid>
      </Paper>

      <Paper className={classes.eachGrid}>
        <span className={classes.paper}>
          <Grid>
            <img src="user4.png" alt="img" />
          </Grid>

          <Grid>
            <span className={classes.typo1}>Dereck Diamon</span>
            <span className={classes.typo2}>21 Aug 2021 </span>
          </Grid>
        </span>
        <Grid className={classes.dot}>
          <img style={{ height: "15px" }} alt="dot" src="green dot.png" />
        </Grid>
      </Paper>
    </Paper>
  );
}
