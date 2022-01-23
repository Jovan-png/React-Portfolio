import react from "react";
import giveaway from "../../../assets/giveaway.png"
import porto from "../../../assets/OldPortfolio.png"
import finance from '../../../assets/finance.png'



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
            <a><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[porto]}></img>
            </div>
            <div className="card-title">
            <h1 > Old Portfolio</h1>
            </div>
            <div className="git-title">
            <a><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[finance]}></img>
            </div>
            <div className="card-title">
            <h1 > Finance</h1>
            </div>
            <div className="git-title">
            <a><h1 > Github Repo</h1></a>
            </div>
        </div>

        <div  className="card-container">
            <div className="card-body">
                <img src={[porto]}></img>
            </div>
            <div className="git-title">
            <a><h1 > Github Repo</h1></a>
            </div>
        </div>
        </section>
    )
}

export default Project