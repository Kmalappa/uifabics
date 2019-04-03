import React from 'react'
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import HBarChart from './chart/HBarChart';
import App from './App';
import AddForm from './AddForm';
import NavBar from './NavBar';

const Routes = (
  <Router>
    <div>
      <NavBar></NavBar>
    </div>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/chart" component={HBarChart} />
      <Route path="/addForm" component={AddForm} />
    </div>
  </Router>
);
export default Routes;

