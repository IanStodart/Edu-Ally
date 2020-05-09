import React, {component} from "react"
import { Form, Button, ButtonGroup, ToggleButton, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import logo from '../img/logo.png';
import '../css/App.css'; 

class StudentLandingPage extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <h3>What would you like to share with your teachers and principal?</h3> */}
            <Form.Label>What would you like to share with your teachers and principal?</Form.Label>
            <Form.Control type="username" />
            
            <ButtonGroup toggle type="radio">
              <div>
              <ToggleButton type="radio" name="radio" defaultChecked value="1">
                Make me anonymous
              </ToggleButton>
              </div>
              <div>
              <ToggleButton type="radio" name="radio" value="2">
                Include my name
              </ToggleButton>
              </div>
            </ButtonGroup>

            <Button as="input" type="submit" value="Submit" />
          </header>
        </div>
      );
    }
}

export default StudentLandingPage;
