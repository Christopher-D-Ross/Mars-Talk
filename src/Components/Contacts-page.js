import React from 'react';
import { Link } from 'react-router-dom';
import { TitleMenu } from './Title-Menu';
import { setDoc, doc } from "firebase/firestore";
import { db, app } from "../App";


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

// const contactSnap = getDocs(collection(db, "contacts"));


export class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            phoneNumber: "",
            date: new Date()
        }

        this._updateFullName = this._updateFullName.bind(this);
        this._updatePhoneNumber = this._updatePhoneNumber.bind(this);
        this._addContact = this._addContact.bind(this);
    }

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
                            <input id="contact-name" type="text" value={this.state.fullName} onChange={this._updateFullName}></input>
                        </div>
                        <div>
                            <h2>Enter Phone Number</h2>
                        </div>
                        <div>
                            <input id="phone-number" type="text" value={this.state.phoneNumber} onChange={this._updatePhoneNumber}></input>
                        </div>
                        <div>
                            <Link to={'/contacts'}>
                                <button onClick={() => {
                                    this._addContact();
                                    this.theClosing();
                                }}>Add Contact</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _updateFullName(event) {
        this.setState({fullName: event.target.value})
    }

    _updatePhoneNumber(event) {
        this.setState({phoneNumber: event.target.value})
    }

    _addContact() {
        setDoc(doc(this.props.db, "contacts", this.state.fullName),{
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            date: new Date().toLocaleDateString()
        });

        this.setState({
            fullName: "",
            phoneNumber: ""
        })
    }

}