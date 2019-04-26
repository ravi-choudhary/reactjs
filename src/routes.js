import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Layout from "./Layout/layout";
import Home from "./component/home";

class Routes extends Component{
    render(){
        return(
           <Layout>
            <Switch>
                <Route path="/" excat component={Home}/>
                <Home/>
            </Switch>
            </Layout>
           
            
            
        )
    }



}

export default Routes;

