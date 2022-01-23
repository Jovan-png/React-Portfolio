import react from "react";
import giveaway from "../../../assets/giveaway.png"
import porto from "../../../assets/OldPortfolio.png"
import finance from '../../../assets/finance.png'
import note from '../../../assets/note.png'
import weather from '../../../assets/weather.png'
import gpass from '../../../assets/gpass.png'

function Project(){
    return(
        <section className="cards">
        <div  className="card-container">
            <div className="card-body">
                <img src={giveaway}></img>
            </div>
            <div className="card-title">
            <a href="https://safe-beyond-95818.herokuapp.com/"><h1 > Giveaway App</h1></a>
            </div>
            <div className="git-title">
            <a href="https://github.com/dylan-fair/give-away"><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[porto]}></img>
            </div>
            <div className="card-title">
           <a href="jovannorrington.com"><h1 > Old Portfolio</h1></a>
            </div>
            <div className="git-title">
            <a href="https://github.com/Jovan-png/Portfolio-Jovan"><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[finance]}></img>
            </div>
            <div className="card-title">
           <a href="https://jacobryanhanson.github.io/finance-assistant/"> <h1 > Finance</h1></a>
            </div>
            <div className="git-title">
            <a href="https://github.com/JacobRyanHanson/finance-assistant"><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[note]}></img>
            </div>
            <div className="card-title">
            <a href="https://note-taker-jovan.herokuapp.com/"><h1 > Note Taker</h1></a>
            </div>
            <div className="git-title">
            <a href="https://github.com/Jovan-png/Note-Taker"><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[weather]}></img>
            </div>
            <div className="card-title">
            <a href="https://github.com/Jovan-png/Weather-App"><h1 > Weather App</h1></a>
            </div>
            <div className="git-title">
            <a href="https://github.com/Jovan-png/Weather-App"><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[gpass]}></img>
            </div>
            <div className="card-title">
            <a href="https://jovan-png.github.io/Password-generator/"><h1 > Password Generator</h1></a>
            </div>
            <div className="git-title">
            <a href="https://github.com/Jovan-png/Password-generator"><h1 > Github Repo</h1></a>
            </div>
        </div>
        </section>
    )
}

export default Project