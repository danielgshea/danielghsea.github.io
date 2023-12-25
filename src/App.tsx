import React from "react";
import logo from "./logo.svg";
import "@ionic/react/css/core.css";
import "./App.css";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import Projects from "./Pages/Projects";
import Coursework from "./Pages/Coursework";
import AboutMe from "./Pages/AboutMe";

setupIonicReact();
const App: React.FC = () => (
  <IonApp>
    <IonReactHashRouter>
      <IonRouterOutlet placeholder="/">
        <Route path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/coursework" component={Coursework} />
        <Route path="/contact" component={ContactMe} />
      </IonRouterOutlet>
    </IonReactHashRouter>
  </IonApp>
);

export default App;
