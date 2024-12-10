import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AdamBoucquemont/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/adam-boucquemont/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p> Portfolio d'<a href="https://github.com/AdamBoucquemont/React_Portfolio" target="_blank" rel="noreferrer">Adam Boucquemont</a></p>
    </footer>
  );
}

export default Footer;