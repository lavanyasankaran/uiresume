import React, { Fragment } from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';
//import Table from './components/Table/Table'
//import Profile from './components/Profile/Profile'
import Persondetails from './components/Persondetails'
import Contactdetails from './components/ContactDetails'
import Home from './components/Home'


function App() {
  

  
    return (
      
        <Fragment>
        
        <Router>
        <Home/>
          <Route exact path="/persondetails" component={Persondetails}/>
          <Route exact path="/contactdetails" component={Contactdetails}/>
          </Router>
        
        
          </Fragment>
  
        
    );
}

export default App;