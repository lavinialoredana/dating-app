import React, { useState } from "react";

import Button from "./Button";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "./images/user1.jpg";
import { Link } from "react-router-dom";

const Profile = () => {

  // In order to change the button and the background colours I am setting the buttonActioned state to false 
  // as its default value
  const [buttonActioned, setButtonActioned] = useState(false);
  console.log("the value of buttonActioned is:", buttonActioned)



  // I choose to declare the user details constants inside the function to avoid repetition of this information throughout the code
  const userName = "Sophie";
  const userAge = 22;
  const userLocation = "New York";
  const userDescription =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil porro accusantium totam dolorum consectetur tempore repellat id debitis placeat.";
  return (
    //  To change the background colour on click I simulate an if statement.
    //  If buttonActioned === true then I set the different-background class.
    //  Else no change
    <div className= {buttonActioned ===true ? "profile-container different-background-profile" :"profile-container"  } >
      <div> 
        <div className="profile-online-user">
          <Link to="/chatpage">
            <img src={avatar} alt="profile-photo" className="circle-img" />
          </Link>
          
          <div className="online-status">
            online
          </div>
        </div>
        
      <div className="profile-details">
        <div>
          <h2>
            {userName}, {userAge}
          </h2>
          <span> {userLocation}</span>
        </div>

        <FontAwesomeIcon icon={faStar} />
      </div>

        <p>{userDescription}</p>
        </div>
      <Button content="ADD AS FRIEND"  buttonHandler={setButtonActioned}  buttonActioned={buttonActioned}/>
    </div>
    
  );
};

export default Profile;
