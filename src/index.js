import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './components/home_page';
import StudentLanding from './components/student_landing_page'
import AdminLanding from './components/admin_landing_page'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AdminLanding />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
