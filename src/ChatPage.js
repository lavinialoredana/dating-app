import React from "react";
import Message from "./Message"
import userAvatar from './images/user1.jpg';
import myAvatar from './images/user2.jpg';




const ChatPage = () => {
  
return (
<div className="chat-box-container">
 <div className="chat-box">
   <Message img = {userAvatar} text ="Lorem ipsum scripta manet vorba volent scripta manet n'es pas?" user = "guest"  /> 
   <Message img = {myAvatar} text ="Lorem ipsum smanent scripta?" user = "self" /> 
 </div>
 <div className="new-message-wrapper">  
 <input className="new-message" type="text" placeholder="Write a message..." />
</div>
</div>
)
}

export default ChatPage;