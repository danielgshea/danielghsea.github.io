import React from "react";
import logo from "./logo.svg";
import "@ionic/react/css/core.css";
import "./App.css";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactHashRouter, IonReactRouter } from "@ionic/react-router";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import Projects from "./Pages/Projects";
import Coursework from "./Pages/Coursework";
import AboutMe from "./Pages/AboutMe";
import Navbar from "./Components/Navbar";

setupIonicReact();
const App: React.FC = () => {
  const time = new Date();
  console.log("Welcome to my website. Last published at: " + time);

  return (
    <IonApp>
      <IonReactHashRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/coursework" component={Coursework} />
          <Route path="/contact" component={ContactMe} />
        </IonRouterOutlet>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
