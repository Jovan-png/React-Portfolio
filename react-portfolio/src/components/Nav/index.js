
import React, {useState, useEffect} from "react";



function Nav(props){
    const {
        contactSelected,
        setContactSelected
    } = props
    return(
        <header className="header">
            <ul>
            <a data-testid="link" href="/">
                <h1>Jovan </h1>
                <h1>Norrington</h1>
            </a>
            <a data-testid="contact"  onClick={() => setContactSelected(true)}>
                <li class="contact-header">Contact Me</li>
                </a>
                <li class="project-header">Projects</li>
                <a data-testid="about" href="#about"   onClick={() => setContactSelected(false)}>
                <li class="about-header">About</li>
                </a>
           </ul>
        </header>
    )
}

export default Nav