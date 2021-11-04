import React from 'react';
import { Link } from 'react-router-dom';
import { TitleMenu } from './Title-Menu';


export class Contact extends React.Component {
    render () {

        return (
            <div className="contact-container">
                <div className="info">
                    <div>{this.props.name}</div>
                    <div>{this.props.number}*{this.props.date}</div>
                </div>
                <div className="message-button">
                    <button>Message</button>
                </div>
            </div>
        )
    }
}

export class ContactPage extends React.Component {


    modalOpen() {
        document.getElementById("contact-modal").style.display = "flex";
    }

    theClosing() {
        document.getElementById("contact-modal").style.display = "none";
    }


    render () {

        return (
            <div className="contact-page-container">
                <div>
                    <TitleMenu title="Contacts"/>
                    <div className="add-contact-box">
                        <button onClick={this.modalOpen}>Add Contact</button>
                    </div>
                    <Contact name="Dusty Rover" number="222-666-7777" date="11-4-21" />
                    <Contact name="Space Junkie" number="333-565-8998" date="11-4-21" />
                    <Contact name="Neil Degrasse Tyson" number="100-200-3400" date="11-4-21" />
                    <Contact name="Team 4" number="444-444-4444" date="11-4-21" />
                </div>
                <div className="contact-modal" id="contact-modal">
                    <div className="contact-modal-box">
                        <div className="contact-x">
                            <span className="contact-closer" id="contact-closer" onClick={this.theClosing}>X</span>
                        </div>
                        <div>
                            <h2>Enter Name</h2>
                        </div>
                        <div>
                            <input type="text"></input>
                        </div>
                        <div>
                            <h2>Enter Phone Number</h2>
                        </div>
                        <div>
                            <input type="text"></input>
                        </div>
                        <div>
                            <Link to={'/contacts'}>
                                <button onClick={this.theClosing}>Add Contact</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}