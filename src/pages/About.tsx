import React from "react";
import Wrapper from "../sections/Wrapper";

import {  FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src="https://i.postimg.cc/tR6NxdrQ/profile-pic-3.png" alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Abhishek Kushwaha</h1>
      <h2 className="profile-text">The creator of this awesome pokeWeb</h2>
     
      <div className="profile-links">
        <a href="https://github.com/Abhishek11364">
          <FaGithub />
        </a>
       
        <a href="linkedin.com/in/abhishek-kushwaha1508
">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
