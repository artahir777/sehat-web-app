import React from 'react';
import "antd/dist/antd.css"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Services from './pages/Services/Services';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
      <Router>
        <div className = "App" >
          <Switch>
            <Route path = "/sign-in" component = {Login} />
            <Route path = "/services" component = {Services} />
            <Route path = "/" component = {Home} />
          </Switch>
        </div>
      </Router>
      // <div>
      //   <Sidebar/>
      // </div>
  );
}

export default App;
