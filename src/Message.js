import React from "react";


const Message = (props) => {

return (
        // I'm using the ternary operator to simulate an if/else  
        //  if props.user === "guest" then the classes will be message-box guest message 
        //  else the classes will be message-box self-message
<div className={ props.user === "guest" ? "message-box guest-message" : "message-box self-message" }>
<img src={props.img} alt="" className="circle-img"/>
 {/*  if props.user===guest then render the online chat status */}
 {/*  otherwise render nothing */}
{props.user ==="guest" && <div className="online-chat-status"></div>}
<p> {props.text} </p>
</div>
        

)
}
 
export default Message;
  

