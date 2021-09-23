import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useStyles } from "./mainStyle";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <div className={classes.insidemainDiv}>
        <div className={classes.margin}>
          <div className={classes.mainTop}>
            <span className={classes.span1}>Patients Information</span>
            <span className={classes.span2}>Last Updated Today...</span>
          </div>

          <div className={classes.below1stDiv}>
            <div>
              <img alt="img" src="user1.png" />
            </div>
            <div>
              <p className={classes.sara}>Sara Smith</p>

              <div className={classes.Detail}>
                <div className={classes.insideDetail}>
                  <div>
                    <p className={classes.inDetail1}>Phone:</p>
                    <p className={classes.inDetail1}>Email:</p>
                    <p className={classes.inDetail1}>Gender:</p>
                    <p className={classes.inDetail1}>Age:</p>
                  </div>
                  <div>
                    <p className={classes.inDetail2}>9812356790</p>
                    <p className={classes.inDetail2}>sara@gmail.com</p>
                    <p className={classes.inDetail2}>Female</p>
                    <p className={classes.inDetail2}>50</p>
                  </div>
                </div>

                <div className={classes.insideDetail}>
                  <div>
                    <p className={classes.inDetail1}>Surgery Type:</p>
                    <p className={classes.inDetail1}>Surgery Date:</p>
                    <p className={classes.inDetail1}>Height(cm):</p>
                    <p className={classes.inDetail1}>Weight(lb):</p>
                    <p className={classes.inDetail1}>BMI:</p>
                  </div>
                  <div>
                    <p className={classes.inDetail2}>Rotator Cuff Repair</p>
                    <p className={classes.inDetail2}>15 Aug 2020</p>
                    <p className={classes.inDetail2}>163</p>
                    <p className={classes.inDetail2}>110</p>
                    <p className={classes.inDetail2}>19</p>
                  </div>
                </div>

                <div className={classes.insideDetail}>
                  <div>
                    <p className={classes.inDetail1}>Anesthesiologist:</p>
                    <p className={classes.inDetail1}>Anesthesiologist Phone:</p>
                    <p className={classes.inDetail1}>anesthesiologist Email:</p>
                  </div>
                  <div>
                    <p className={classes.inDetail2}>Dr Christina Hardway</p>
                    <p className={classes.inDetail2}>8967129033</p>
                    <p className={classes.inDetail2}>christina@gmail.com</p>
                  </div>
                </div>

                <div className={classes.insideDetail1}>
                  <p className={classes.inDetail1}>Surgury Clearance</p>
                  <Avatar
                    style={{
                      backgroundColor: "#43C43F",
                      height: "60px",
                      width: "60px",
                    }}
                    className={classes.avatar}
                  >
                    Yes
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
          <ul className={classes.list}>
            <li className={classes.li}>List of Prior Surgeries</li>
            <li className={classes.li}>List of Medical Diagnosis</li>
            <li className={classes.li}>List of Medications</li>
            <li className={classes.li}>Airway Evaluation</li>
            <li className={classes.li}>
              Anesthesia Clearance and Recommendation
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.margin}>
        <div className={classes.aboveTable}>
          <div>
            <p className={classes.p}>First Time Surgery</p>
            <p className={classes.para}>No</p>
          </div>

          <div>
            <p className={classes.p}>
              Family History of Surgical Complications ?
            </p>
            <p className={classes.para}>Yes</p>
          </div>
          <div>
            <p className={classes.p}>If Yes, please provide more details</p>
            <p className={classes.para}>
              In laboris reprehenderit excepteur enim mollit nulla anim dolore
              qui ex ullamco. Eiusmod cillum elit sit aliqua commodo quis
              exercitation reprehenderit nisi et deserunt eiusmod do. Aute nisi
              velit velit ad.
            </p>
          </div>
        </div>
        <span className={classes.span}>Previous Surgeries</span>
        <table className={classes.Table}>
          <tr className={classes.th}>
            <td>Surgery Type</td>
            <td>Date</td>
            <td>Anesthesia Type</td>
            <td>Surgical Complications</td>
            <td>
              Anesthetic Complications(nausea,vomiting,difficult intubation)
            </td>
          </tr>
          <tr className={classes.tr}>
            <td>Shoulder reconstruction</td>
            <td>January 2008</td>
            <td>General "Breathing Tube"</td>
            <td>No</td>
            <td className={classes.td}>
              No
              <td>
                <DeleteIcon /> <CreateIcon />
              </td>
            </td>
          </tr>
        </table>
        <button className={classes.button}>
          <span className={classes.plus}>+</span>Add Surgery
        </button>
      </div>
    </div>
  );
}
