
import React, {useState, useEffect} from "react";



function Nav(props){
    const {
        contactSelected,
        setContactSelected,
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props


    useEffect(() => {
        document.title = (currentCategory.name);
      }, [currentCategory]);
    
    return(
        <header className="header">
            <ul>
            <a data-testid="link" href="/">
                <h1>Jovan </h1>
                <h1>Norrington</h1>
            </a>
            <a data-testid="about" href="#about"   onClick={() => setContactSelected(false)}>
                <li className="about-header">About</li>
                </a>
            <a data-testid="contact"  onClick={() => setContactSelected(true)}>
                <li className="contact-header">Contact Me</li>
                </a>
                <li className="project-header">Projects</li>
                <li className="resume-header">Resume</li>
              
           </ul>
        </header>
    )
}

export default Nav