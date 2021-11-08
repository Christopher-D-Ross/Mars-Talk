import React from "react";
import { Link } from "react-router-dom";

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signing: false
        };
    }

    playAudio() {
        let robo = new Audio("synthesize.mp3");
        robo.play();
    }

    modalOpen() {
        document.getElementById("modal").style.display = "flex";
    }

    theClosing() {
        document.getElementById("modal").style.display = "none";
    }

    render () {


        return (
            <div className="land-container">
                <div className="topgrid" onMouseEnter={this.playAudio}>
                    <div className="titlebox">
                        <div className="landtitle">
                            <h1>Mars<span className="talk">talk</span></h1>
                        </div>
                        <div className="buttons">
                            <div>
                                <button className="create" onClick={this.playAudio}>Create Account</button>
                            </div>
                            <div>
                                <button className="signin" id="signin" onClick={this.modalOpen}>Sign In</button>
                            </div>
                        </div>
                    </div>
                    <div className="marsbox">
                        <img src = "marsland.jpeg" alt="planet-mars"/>
                    </div>
                </div>
                <div className="bottomgrid">
                    <div className="satellitebox">
                        <img src="satellite.jpeg" alt="satellite"/>
                    </div>
                    <div className="keyboardbox">
                        <img src="glowmac.jpg" alt="keyboard"/>
                    </div>
                    <div className="descriptionbox">
                        <h2>Space Communication</h2>
                        <p>Take flight on Mars talk and get connected with anyone, anywhere.</p>
                    </div>
                </div>
                <div className="modal" id="modal">
                    <div className="signinbox">
                        <div className="thex">
                        <span className="closer" onClick={this.theClosing}>X</span>
                        </div>
                        <h2>Email</h2>
                        <input type="email"></input>
                        <h2>Password</h2>
                        <input type="password"></input>
                        <Link to={'/dashboard'}>
                            <button>Sign-In</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
