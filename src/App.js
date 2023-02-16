import Login from "./page/login/Login";
import Footer from "./page/footer/Footer";
import { useState } from "react";
import {AuthContext} from './helper/AuthContext'
import AboutUs from "./page/About Us/AboutUs";
import {Link, Route,Routes} from 'react-router-dom'
import CreateAnAccount from "./page/CreateAnAccount/CreateANAccount";
import Navbar from "./components/navber/Navbar"
import LandingPage from "./page/LandingPage/LandingPage";



function App()
{

  const [AuthState,SetAuthSate] = useState({
  username: "",
  id : 0,
  status: false,

})
  return (
   
      <div className='App'>

        <AuthContext.Provider value={{AuthState,SetAuthSate}}>


          
       <Routes > 
  
   <Route path='/' element={<LandingPage/>}/>
   <Route path='/login' element={<Login/>}/>
     <Route path='/sign_up' element={<CreateAnAccount/>}/>
      <Route path='/about' element={<AboutUs/>}/>
   </Routes> 
 { <Footer/> }
    </AuthContext.Provider>
      </div>
  
  );
}

export default App;
