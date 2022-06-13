import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";

import { Route, Routes} from "react-router-dom";

function App() {
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/login" element={ <Login />}/>
      <Route path="/" element={ <Home />}/>
    </Routes>
    
     
        
            
              
           
         
      

    
    </div>;
}

export default App;
