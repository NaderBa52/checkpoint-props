import React from 'react'
import PropTypes from 'prop-types';

const Profile = ({data,handlename,children}) => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <div>
            <h3  style={{color:"purple"}}>{data.fullname}</h3>
            <h4 style={{backgroundColor: "lightblue",padding:"10px"}}> {data.bio}</h4>
            <h5  style={mystyle}>{data.profession}</h5>
            <div className="avatar"> {children}</div>
            <button onClick={()=>handlename(data.fullname)} style={{color:"white",backgroundColor:"blue"}}>Click me</button>
        </div>
    )
}
Profile.propTypes={
    handlename:PropTypes.func,
    data:PropTypes.object

}
Profile.defaultProps={     fullName : "benamor nader", 
    bio : "Welcome here",  
       profession  : "web Developer"   }
export default Profile
