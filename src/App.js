import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  let storedLoginInfo = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(storedLoginInfo === "1"){
      setIsLoggedIn(true);
    }
  },[storedLoginInfo]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1"); 
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0")
    setIsLoggedIn(false);
  };

  useEffect(()=>{
    let xmlFile = new XMLHttpRequest();
    xmlFile.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        console.log(xmlFile.responseXML)
      }
    }
    xmlFile.open("GET", "./data/Notes.xml");
    xmlFile.send();
  }, []);

  return (
    <React.Fragment>
      <AuthContext.Provider value={{isLoggedIn: false}}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;