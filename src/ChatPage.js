import React from "react";
import Message from "./Message"
import myAvatar from './images/user1.jpg';
import userAvatar from './images/user2.jpg';




const ChatPage = () => {
  
return (
<div className="chat-box-container">
 <div className="chat-box">
   <Message img = {userAvatar} text ="Lorem ipsum scripta manet"/> 
   <Message img = {myAvatar} text ="Lorem ipsum smanent scripta?"/> 
 </div>
 <input className="new-message" type="text" />
</div>
)
}

export default ChatPage;