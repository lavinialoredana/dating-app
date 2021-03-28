import React from "react";

const Button = (props) => {

       const changeColours = () => {
              props.buttonHandler (!props.buttonActioned)
       }
return (
       <a href="#" className= {props.buttonActioned ? "button different-background-button" : "button" } onClick = {changeColours}> {props.content}</a>
)

}


export default Button;