import React, {useState} from "react";
import Message from "./Message"
import userAvatar from './images/user1.jpg';
import myAvatar from './images/user2.jpg';
import Button from './Button';




const ChatPage = () => {

  const [ messageRecord, setMessageRecord ] = useState( [ {
    avatar: userAvatar,
    message: "Hey! Let's gor for a stroll, it's a lovely day!",
    isGuest: true
  }
  ])
  
  const addNewMessage = () => {
    setMessageRecord(messageRecord.concat({
      avatar:myAvatar,
      message: "Hey, that's a great idea!",
      isGuest: false
    }))
  }

console.log("this is the MessageRecord", messageRecord)

return (
<div className="chat-box-container">
 <div className="chat-box">
   {messageRecord.map((message) => <Message img ={message.avatar} text ={message.message} user = {message.isGuest? "guest": "self"} /> ) }
   {/* <Message img = {userAvatar} text ="Lorem ipsum scripta manet vorba volent scripta manet n'es pas?" user = "guest"  /> 
   <Message img = {myAvatar} text ="Lorem ipsum smanent scripta?" user = "self" />  */}
 </div>
  
 <div className="new-message-wrapper">  
 <input className="new-message" type="text" placeholder="Write a message..." />
 <Button content= "SEND" buttonHandler ={addNewMessage}/>
</div>
</div>
)
}

export default ChatPage;