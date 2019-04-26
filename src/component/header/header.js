import React from "react";
import style from "./header.css";
import {Link} from "react-router-dom";





const Header=(props)=>{
    const logo=()=>{
            return(
                <Link to="/" className={style.abc}><img src="img/logo.png" alt="logo"/></Link>
            )
    }
    
    return(
        
        <header className={style.header}>
            <div className={style.headeropt}></div>
{logo()}
        </header>
        
    )
}

export default Header;