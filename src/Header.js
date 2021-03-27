import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {  Link } from "react-router-dom";

const Header = () => {
     return (
 <Link to="/"> 
<header>
<FontAwesomeIcon icon={faChevronLeft} />
<h1> Sophie</h1>
</header>
</Link> 
)
}




export default Header;