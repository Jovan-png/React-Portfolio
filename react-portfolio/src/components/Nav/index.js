
import React, {useState, useEffect} from "react";

import heroImg  from "../../assets/jovan.jpg"

function Nav(props){
    
const tab = ["About", "Contact", "Projects", "Resume"]
    return(
      <div className="bg-img">
        <header className="header">
            
            <ul>
             <a data-testid="link" href="/">
                <h1>Jovan  </h1> <h1>   </h1>
                <h1> Norrington</h1>
            </a>
            {tab.map(tabs => (
        <li className="nav-item" key={tabs}>
          <a
            href={'#' + tabs.toLowerCase()}
            onClick={() => props.handlePageChange(tabs)}
            className={props.currentPage === tabs ? 'NAV-Active' : 'NAV-Not-Active'
            
            }
            
          >
            {tabs}
          </a>
        </li>
      ))}
            {/* <a data-testid="link" href="/">
                <h1>Jovan </h1>
                <h1>Norrington</h1>
            </a>
            <a data-testid="about" href="#about"  >
                <li className="about-header"
                >About</li>
                </a>
            <a data-testid="contact" >
                <li className="contact-header">Contact Me</li>
                </a>
                <li className="project-header">Projects</li>
                <li className="resume-header">Resume</li> */}
              
           </ul>
          
        </header>
        <div className="hero-container">
        {/* <img src={heroImg}  className="hero-img"  alt="cover"/> */}
        </div>
        </div>
    )
}

export default Nav