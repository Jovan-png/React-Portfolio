import react from "react";
import giveaway from "../../../assets/giveaway.png"
import webResume from '../../../assets/Jovan-Web-Resume-2022.png'




function Resume(){
    return(
        <section>
            <div className="resume-container">
               <p>For a copy of my Resume </p> <a href={webResume} download>Click Here</a>
            </div>
        </section>
    )
}

export default Resume