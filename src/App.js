import React from 'react';

import "antd/dist/antd.css";
import "./App.css";


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/MainPage/Home/Home';
import Login from './pages/MainPage/Login/Login';
import Services from './pages/MainPage/Services/Services';
import UserDashboard from "./pages/Patient/UserDashboard/UserDashboard";
import UserProfile from './pages/Patient/UserProfile/UserProfile';
import PersonalInfo from './pages/Patient/PersonalInfo/PersonalInfo';
import Appointments from './pages/Patient/Appointments/Appointments';
import Prescriptions from './pages/Patient/Prescriptions/Prescriptions';
import UserSettings from './pages/Patient/UserSettings/UserSettings';
import MedicalHistory from './pages/Patient/MedicalHistory/MedicalHistory';
import FindDoctors from './pages/Patient/FindDoctors/FindDoctors';
import Vitals from './pages/Patient/Vitals/Vitals';
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard';
import DoctorsList from './pages/Admin/DoctorsList/DoctorsList';
import PatientsList from './pages/Admin/PatientsList/PatientsList';
import DrProfile from './pages/Patient/DrProfile/DrProfile';
import Settings from './pages/Admin/Settings/Settings';

function App() {
  return (
      <Router>
        <div className = "App" >
          <Switch>
            <Route path = "/sign-in" component = {Login} />
            <Route path = "/services" component = {Services} />
            <Route path = "/user-dashboard" component = {UserDashboard} />
            <Route path = "/dr-profile" component = {DrProfile} />
            <Route path = "/user-profile" component = {UserProfile} />
            <Route path = "/user-personal-info" component = {PersonalInfo} />
            <Route path = "/appointments" component = {Appointments} />
            <Route path = "/user-prescriptions" component = {Prescriptions} />
            <Route path = "/user-settings" component = {UserSettings} />
            <Route path = "/medical-history" component = {MedicalHistory} />
            <Route path = "/find-drs" component = {FindDoctors} />
            <Route path = "/vitals" component = {Vitals} />
            <Route path = "/admin-dashboard/doctors-list" component = {DoctorsList} />
            <Route path = "/admin-dashboard/patients-list" component = {PatientsList} />
            <Route path = "/admin-dashboard/settings" component = {Settings} />
            <Route path = "/admin-dashboard" component = {AdminDashboard} />
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
