import './App.css';
import Home from './Components/HomeComponent';
import Main from './Components/MainComponent'; 
import Mission from './Components/MissionsComponent';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Home/>
     </BrowserRouter>
    </div>
  );
}

export default App;
