import React from "react";

const Button = (props) => {

       const classListForAddToFriend = props.buttonActioned ? "button different-background-button" : "button";
       const classListForSendButton =  props.sendButton ? "button send-button" : "button";
       
return (
       <a href="#" className= { props.buttonActioned ? classListForAddToFriend : classListForSendButton} onClick = {props.buttonHandler}> {props.content}</a>
)

}


export default Button;