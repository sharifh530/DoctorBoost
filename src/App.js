import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
import SignUp from './Components/Signup';
import SignIn from "./pages/SignIn"
import DoctorPage from "./pages/DoctorPage"
import Chat from "./pages/Chat"
import Login from "./pages/SignInDoctor"
import ChatWithPatient from "./pages/ChatWithPatient"

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} /> */}
         <Route path='/sign-up' component={SignUp} />
         <Route path='/sign-in' component={SignIn} />
         <Route path='/doctors' component={DoctorPage} />
         <Route path='/chat/:doctorID' component={Chat} />
         <Route path='/chatwithpatient/:doctorID' component={ChatWithPatient} />
         <Route path='/signinasdoctor' component={Login} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;