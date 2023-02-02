import Login from "./page/login/Login";
import Footer from "./page/footer/Footer";
import { useState } from "react";
import {AuthContext} from './helper/AuthContext'

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
    <Login/>    
    

    <Footer/>

    </AuthContext.Provider>
      </div>
  
  );
}

export default App;
