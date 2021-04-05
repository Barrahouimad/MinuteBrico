import './App.css';
import React from 'react'
import store from './Shared/store';
import Main from './Views/MainComponent'; 
import {BrowserRouter } from 'react-router-dom';

export const ThemeContext= React.createContext(store);

function App() {
  

  return (
    <ThemeContext.Provider value={store}>
    <div className="App">

      <BrowserRouter>
         <Main/>
     </BrowserRouter>

    </div>
   </ThemeContext.Provider>
  );
}

export default App;
