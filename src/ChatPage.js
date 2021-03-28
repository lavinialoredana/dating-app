import React, {useState} from "react";
import Message from "./Message"
import userAvatar from './images/user1.jpg';
import myAvatar from './images/user2.jpg';
import Button from './Button';
import {useHistory} from "react-router-dom";



const ChatPage = () => {

  // Creating the messageRecord and the default message that comes up when the chat page opens
  
  const [localStorageData, setLocalStorageData] = useState(null);
  const history = useHistory();


  const [ messageRecord, setMessageRecord ] = useState( JSON.parse(sessionStorage.getItem("messageStorage")) ? JSON.parse(sessionStorage.getItem("messageStorage")) : 
  [{
    avatar: userAvatar,
    message: "Hey! Let's gor for a stroll, it's a lovely day!",
    isGuest: true
  }
  ])

  console.log("my message record", messageRecord);
  console.log("message storage", sessionStorage)

  // Getting the value of the input everytime this changes 
   const [inputValue, setInputValue] = useState("");
   const getInputValue = (event) => {
     setInputValue(event.target.value)
   }


  //  Creating the addNewMessage function to add new input messages to messageRecord 
  //  Reseting setInputValue to none after pressing Send button
  const addNewMessage = () => {
    setMessageRecord(messageRecord.concat({
      avatar:myAvatar,
      message: inputValue,
      isGuest: false
    }))
    setInputValue("");

    sessionStorage.setItem("messageStorage", JSON.stringify(messageRecord));
    setLocalStorageData(JSON.parse(sessionStorage.getItem("messageStorage")))
    history.push("/chatpage")
  }
  

  console.log("local storage data is:", JSON.parse(sessionStorage.getItem("messageStorage")) );

return (
<div className="chat-box-container">
 <div className="chat-box">
   {messageRecord.map((message) => <Message img ={message.avatar} text ={message.message} user = {message.isGuest? "guest": "self"} /> ) }
 </div>
  
 <div className="new-message-wrapper">  
 <input className="new-message" type="text" placeholder="Write a message..." onChange={getInputValue} value={inputValue}/>
 <Button content= "SEND" buttonHandler ={addNewMessage}/>
</div>
</div>
)
}

export default ChatPage;