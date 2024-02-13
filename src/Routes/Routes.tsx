import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Projects from "../Pages/Projects/Projects";
import Coursework from "../Pages/Coursework/Coursework";
import AboutMe from "../Pages/AboutMe/AboutMe";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/coursework" component={Coursework} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </BrowserRouter>
  );
};
