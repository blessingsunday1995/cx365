import Login from "./page/login/Login";
import Footer from "./page/footer/Footer";
import { useState } from "react";
import {AuthContext} from './helper/AuthContext'
import AboutUs from "./page/About Us/AboutUs";
import CreateAnAccount from "./page/CreateAnAccount/CreateANAccount";



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
    {/* <Login/>  */}
{/* <AboutUs/> */}
<CreateAnAccount/>
    {/* <Footer/> */}


    </AuthContext.Provider>
      </div>
  
  );
}

export default App;
