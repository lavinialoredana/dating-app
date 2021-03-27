import React from "react";


import Button from "./Button";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from './images/user1.png';
import {  Link } from "react-router-dom";



const Profile = () => {
        // I choose to declare the user details constants inside the function to avoid repetition of this information throughout the code
  const userName = "Sophie";
  const userAge = 22;
  const userLocation = "New York";
  const userDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nihil porro accusantium totam dolorum consectetur tempore repellat id debitis placeat qui dolorem delectus iusto, nisi quibusdam quasi architecto. Deserunt, facilis";
  return (
    <div>
      <Link to="/chatpage">
        <img src={avatar} alt="profile" />
        </Link>

      <div className= "profile-info">       
        <div>
          <h1>{userName}, {userAge}</h1>
          <FontAwesomeIcon icon={faStar}/>
        </div>

        <span> {userLocation}</span>
        <p>{userDescription}</p>
         
         <Button content="ADD AS FRIEND"/> 
      </div>

    </div>


  );
};

export default Profile
