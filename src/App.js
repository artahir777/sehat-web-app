import React from 'react';

import "antd/dist/antd.css";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import Home from './pages/MainPage/Home/Home';
import Login from './pages/MainPage/Login/Login';
import UserDashboard from "./pages/Patient/UserDashboard/UserDashboard";
import UserProfile from './pages/Patient/UserProfile/UserProfile';
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
import Requests from './pages/Admin/Requests/Requests';
import Files from './pages/Admin/ManageFiles/Files';
import AreYouDr from './pages/Patient/AreYouDr/AreYouDr';
import { ToastContainer } from 'react-toastify';
import ConsultNow from './pages/Patient/ConsultNow/ConsultNow';
import Support from './pages/Patient/Support/Support';
import Footer from './components/Footer/Footer';
import DrRegForm from './pages/Patient/DrRegForm/DrRegForm';
import DrDashboard from './pages/Doctor/DrDashboard/DrDashboard';
import DrSettings from './pages/Doctor/Settings/DrSettings';
import Profile from './pages/Doctor/Profile/Profile';
import DrAppointments from './pages/Doctor/Appointments/DrAppointments';
import DrPrescriptions from './pages/Doctor/DrPrescriptions/DrPrescriptions';
import About from './pages/MainPage/About/About';

const App = () => {
  

  return (
      // <div>
      //   <DrRegForm/>
      // </div>
      <Router>
        <div className = "App" >
          <Switch>
            
            <Route path = "/sign-in" component = {Login} />
            <Route path = "/about" component = {About} />

            {/* Routing Patient's Pages */}

            <Route path = "/user-dashboard" component = {UserDashboard} />
            <Route path = "/dr-profile" component = {DrProfile} />
            <Route path = "/are-you-a-dr" component = {AreYouDr} />
            <Route path = "/dr-reg-form" component = {DrRegForm} />
            <Route path = "/user-profile" component = {UserProfile} />
            <Route path = "/appointments" component = {Appointments} />
            <Route path = "/user-prescriptions" component = {Prescriptions} />
            <Route path = "/user-settings" component = {UserSettings} />
            <Route path = "/medical-history" component = {MedicalHistory} />
            <Route path = "/find-drs" component = {FindDoctors} />
            <Route path = "/vitals" component = {Vitals} />
            <Route path = "/consult-now" component = {ConsultNow} />
            <Route path = "/support" component = {Support} />

            {/* Routing Doctor's Pages */}

            <Route path = "/dr/home" component = {DrDashboard} />
            <Route path = "/dr/settings" component = {DrSettings} />
            <Route path = "/dr/settings" component = {DrSettings} />
            <Route path = "/dr/appointments" component = {DrAppointments} />
            <Route path = "/dr/prescriptions" component = {DrPrescriptions} />
            <Route path = "/dr/profile" component = {Profile} />

            {/* Routing Admin's Pages */}

            <Route path = "/admin-dashboard/doctors-list" component = {DoctorsList} />
            <Route path = "/admin-dashboard/patients-list" component = {PatientsList} />
            <Route path = "/admin-dashboard/settings" component = {Settings} />
            <Route path = "/admin-dashboard/requests-approvals" component = {Requests} />
            <Route path = "/admin-dashboard/manage-files" component = {Files} />
            
            {/* Generic Paths */}

            <Route path = "/admin-dashboard" component = {AdminDashboard} />
            <Route path = "/" component = {Home} />
          </Switch>
          <Footer/>
        </div>
        <ToastContainer/>
      </Router>
  );
}

export default App;
