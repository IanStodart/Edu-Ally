import React, {component} from "react"
import { Form, Button, ButtonGroup, ToggleButton, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../css/App.css'; 

class AdminLandingPage extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div>
                <h2>Problem A</h2>
                <h3>Status</h3>
                <h3>Submitted by: Anonymous</h3>
            </div>
            <div>
                <h2>Problem B</h2>
                <h3>Status</h3>
                <h3>Submitted by: Anonymous</h3>
            </div>
            <div>
                <h2>Problem C</h2>
                <h3>Status</h3>
                <h3>Submitted by: Anonymous</h3>
            </div>
            <div>
                <h2>Sammy Smith punches Johnny Jones</h2>
                <h3>Unresolved</h3>
                <h3>Submitted by: Anonymous</h3>
            </div>
            <div>
                <h2>Mrs P screamed in Sue's face</h2>
                <h3>Resolved</h3>
                <h3>Submitted by: John P</h3>
            </div>
            <div>
                <h2>Bobby J hit Annie H on the playground</h2>
                <h3>Unresolved</h3>
                <h3>Submitted by: Anonymous</h3>
            </div>
          </header>
        </div>
      );
    }
}

export default AdminLandingPage;
