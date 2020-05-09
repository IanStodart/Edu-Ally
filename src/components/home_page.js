import React, {component} from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import Form from 'react-bootstrap';
import logo from '../img/logo.png';
import '../css/App.css'; 

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <Form.Label>Username:</Form.Label>
            <Form.Control type="username" />
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" />
            
            <div>
              <Button as="input" type="button" value="Forgot Password" />
              <Button as="input" type="submit" value="Submit" />
            </div>

          </header>
        </div>
      );
    }
}

export default App;
