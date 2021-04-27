import './App.css';
import React, { useEffect } from 'react'
import Store from './Shared/store';
import Main from './Views/MainComponent'; 
import {BrowserRouter } from 'react-router-dom';
import Context from './Shared/context';

export const ThemeContext= React.createContext(Store);

function App() {
  const [Auth,setAuth]=React.useState(false);
  const [user,setId]=React.useState({
    id:null,
    firstName:"",
    lastName:"",
    email:""
  });
//the second store 

const store = Store();
  return (
   <Context.Provider value={store}>

    <ThemeContext.Provider value={{Auth,setAuth,user,setId}}>
      <div className="App">

          <BrowserRouter>
            <Main/>
          </BrowserRouter>

      </div>
   </ThemeContext.Provider>

   </Context.Provider>
  );

 
  

}

export default App;
