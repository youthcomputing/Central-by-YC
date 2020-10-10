import React from "react";
import "./selectUser.css";
import Button from "react-bootstrap/Button";
import * as ROUTES from "../Constants/Routes";

function User(props) {
  return (
    <div className="User">
      <text className="role">Select Your Role</text>

      <box1 className="outisdeboxleft"></box1>
      <box className="boxleft"></box>
      <people className="people">
        <img src="imagei.png" width="55" height="55" alt="Central by YC" />{" "}
      </people>
      <texter className="texts">Attendee</texter>
      <content1 className="text11">
        • Attend events posted by organizers <br></br>
        <br></br>• Earn virtual currency to win prizes <br></br>
        <br></br>• Personalized profile
      </content1>

      <left className="outsideboxright"></left>
      <textt className="textt">
        • Post new events for users <br></br>
        <br></br>• Analysis dashboard regarding event information <br></br>
        <br></br>• View other events in the community
      </textt>
      <box111 className="boxxx"></box111>
      <organizer className="organizer">Organizer</organizer>
      <people className="multiple">
        <img src="multiple.png" width="55" height="55" alt="Central by YC" />{" "}
      </people>

      <Button
        className="attendee"
        variant="contained"
        color="primary"
        onClick={() =>
          props.history.push(ROUTES.SIGNUP, { state: { attendee: true } })
        }
      >
        Next
      </Button>

      <Button
        className="attendee1"
        variant="contained"
        color="primary"
        onClick={() =>
          props.history.push(ROUTES.SIGNUP, { state: { attendee: true } })
        }
      >
        Next
      </Button>
    </div>
  );
}

export default User;