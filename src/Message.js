import React from "react";


const Message = (props) => {

return (
<div>
<img src={props.img} alt="" className="circle-img"/>
<p> {props.text} </p>
</div>
        

)
}
 
export default Message;
  

