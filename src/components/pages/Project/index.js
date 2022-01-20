import react from "react";
import giveaway from "../../../assets/giveaway.png"
import porto from "../../../assets/OldPortfolio.png"




function Project(){
    return(
        <section className="cards">
        <div  className="card-container">
            <div className="card-body">
                <img src={giveaway}></img>
            </div>
            <div className="card-title">
            <h1 > GiveAway App</h1>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[porto]}></img>
            </div>
            <div className="card-title">
            <h1 > Old Portfolio</h1>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[porto]}></img>
            </div>
            <div className="card-title">
            <h1 > Old Portfolio</h1>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[porto]}></img>
            </div>
            <div className="card-title">
            <h1 > Old Portfolio</h1>
            </div>
        </div>
        </section>
    )
}

export default Project