
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import Transitions from "./Pages/Transitions";
import { Experts } from "./Pages/Experts";
import AddExpert from "./Models/AddExpert";
import Permissions from "./Models/Permissions";
import Test from "./Components/Test";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
    <Routes>
      <Route path='/' Component={Login}></Route>
      <Route path='/transitions' Component={Transitions}></Route>
      <Route path='/experts' Component={Experts}></Route>
      <Route path='/Test' Component={Test}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
