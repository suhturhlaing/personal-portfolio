import React , { useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    const page = location.pathname;
    console.log(location.pathname);

    if(page === '/'){
        document.title = 'Su Htur Hlaing';
    }
    else{
        const longTitle = page.split("/")
        document.title = (longTitle.length === 3 ) ? 
        ( longTitle[2].toLowerCase()):
        ( longTitle[1].toLowerCase())
    }

    useEffect( () =>{
        setExpandNavbar(false);
    }, [location]);


  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
                onClick={() => 
                    { 
                        setExpandNavbar((prev) => !prev);
                    }
                }
            >
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/" id={page === '/' ? 'currentSection' : ''}> Home </Link>
            <Link to="/projects" id={page === '/projects' ? 'currentSection' : ''}> Projects </Link>
            <Link to="/experience" id={page === '/experience' ? 'currentSection' : ''}> Experience </Link>
        </div>
    
    </div>
  )
}

export default Navbar