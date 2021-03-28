import React from "react";

const Button = (props) => {

       
return (
       <a href="#" className= {props.buttonActioned ? "button different-background-button" : "button" } onClick = {props.buttonHandler}> {props.content}</a>
)

}


export default Button;