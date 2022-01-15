
import React, {useState, useEffect} from "react";



function Nav(props){
    
const tab = ["About", "Contact", "Projects", "Resume"]
    return(
        <header className="header">
            
            <ul>
             <a data-testid="link" href="/">
                <h1>Jovan </h1>
                <h1>Norrington</h1>
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
    )
}

export default Nav