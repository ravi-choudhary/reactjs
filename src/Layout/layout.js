import React, {Component} from "react";
import Header from "../component/header/header";

class Layout extends Component{
    render(){
        return(
            <div>
            <Header/>
       {this.props.children}
       Footer
           </div>
        )
    }

}

export default Layout;
