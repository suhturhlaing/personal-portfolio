import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"

function Footer() {
  const routeInstagram = () =>{ 
    window.open("https://www.instagram.com");
  }
  const routeWebsite = () =>{ 
    window.open("https://www.suhturhlaing.com");
  }
  const routeFacebook = () =>{ 
    window.open("https://www.facebook.com");
  }
  const routeLinkedin = () =>{ 
    window.open("https://www.linkedin.com/in/su-htur-hlaing-228659241/");
  }

  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon onClick={routeInstagram}/>
            <LanguageIcon onClick={routeWebsite}/>
            <FacebookIcon  onClick={routeFacebook}/>
            <LinkedInIcon onClick={routeLinkedin}/>
        </div>
        <p> &copy: 2022 www.suhturhlaing.com</p>
    </div>
  )
}

export default Footer