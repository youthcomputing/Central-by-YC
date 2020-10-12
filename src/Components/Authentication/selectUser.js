import React from "react";
import "./selectUser.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as ROUTES from "../../Constants/Routes";

function User(props) {
  return (
    <React.Fragment>
      <h1 className="role">Select Your Role</h1>
      <div class="row h-75 align-middle">
        <Card className="outsidebox col-sm">
          <h1>Attendee</h1>
         
            <img src="imagei.png" width="50" height="50" />

          <p>
            • Attend events posted by organizers <br></br>
            <br></br>• Earn virtual currency to win prizes <br></br>
            <br></br>• Personalized profile
          </p>
          <Button className="Next"
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>
          
        </Card>
       
       
        <Card className="outsidebox col-sm">
          <h1>Organizer</h1>
          <img src="multiple.png" width="50" height="50" />
          <p>
          • Post new events for general users 
<br></br>
            <br></br>• Analysis dashboard regarding event information<br></br><br></br>• View other events in the community
          </p>
          <Button className="Next"
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>
          
        </Card>
      </div>
    </React.Fragment>
  );
}

export default User;
