import React from "react";
import {Link} from "react-router-dom";

const Profile=(props)=>{
    console.log(props);
    
    return(
        
        <div>
           
            <Link to={{pathname: `${props.match.url}/profile`}}>
            Profile</Link>
            </div>
    )
}

export default Profile;