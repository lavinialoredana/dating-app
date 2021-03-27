import React from "react";

import Button from "./Button";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "./images/user1.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  // I choose to declare the user details constants inside the function to avoid repetition of this information throughout the code
  const userName = "Sophie";
  const userAge = 22;
  const userLocation = "New York";
  const userDescription =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil porro accusantium totam dolorum consectetur tempore repellat id debitis placeat.";
  return (
    <div className="profile-container">
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
      <Button content="ADD AS FRIEND" />
    </div>
    
  );
};

export default Profile;
