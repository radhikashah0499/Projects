import React from "react";
//import ReactDOM from 'react-dom';
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </>
  );
};
export default App;
