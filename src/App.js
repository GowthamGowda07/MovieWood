import React, { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import {Route,Routes} from 'react-router-dom';
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
import { createContext} from "react";
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from "./components/Logout";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUsername] = useState("");

  return (
    <Appstate.Provider value = {{login, userName, setLogin, setUsername}} >
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element = {<Cards/>} />
        <Route path="/AddMovie" element = {<AddMovie/>} />
        <Route path="/detail/:id" element = {<Detail/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/logout" element = {<Logout/>} />
      </Routes>
      
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}