import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {

  const routeLinkedin = () =>{ 
    window.open("https://www.linkedin.com/in/su-htur-hlaing-228659241/");
  }
  const routeEmail = (e) =>{ 
    window.location.href = "mailto:suhturhlaing271098@gmail.com";
    e.preventDefault();
  }
  const routeGitHub = () =>{ 
    window.open("https://github.com/suhturhlaing");
  }

  return (
    <div className='home'>

      <div className='about'>
        <h2> Hello! </h2>
        <h3>I'm Su Htur Hlaing (su htur)</h3>
        <div className='prompt'>
          <p>A Software Engineer  with a passion for learning and creating. I am Software Engineer from Myanmar with the 4 years of intensive work experience in IT Fields.</p>
          <LinkedInIcon onClick={routeLinkedin}/> 
          <EmailIcon onClick = {routeEmail} /> 
          <GithubIcon onClick ={routeGitHub}/>
         
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI, StyleComponents, Vue.js
            </span>
          </li>

          <li className='item'>
            <h2> Back-End</h2>
            <span>
              PHP, Laravel, MySQL, MS SQL, NodeJS a little knowledge, AWS S3, AWS Route53, Deployer, BitBucket CodePipeline
            </span>
          </li>

          <li className='item'>
            <h2> Languages</h2>
            <span>
              Javascript, PHP
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
