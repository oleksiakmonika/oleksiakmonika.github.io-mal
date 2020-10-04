import React from "react";
import ReactDOM from "react-dom";
import Home from './Home/Home';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Nav/Kontakt';
import NotFound from "./Nav/NotFound";
import AboutMe from "./Nav/OMnie";
import Offer from "./Nav/Oferta";
require('../scss/main.scss');

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/omnie" component={AboutMe}/>
                    <Route path="/oferta" component={Offer}/>
                    <Route path="/kontakt" component={Contact}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("app"));

