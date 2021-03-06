import React from 'react';
import { Link } from 'react-router-dom';
import { TitleMenu } from './Title-Menu';
import { collection, query, getDocs, addDoc, orderBy } from "firebase/firestore";


export class Contact extends React.Component {
    render () {

        return (
            <div className="contact-container">
                <div className="info" style={{boxShadow:"-10px 10px rgba(0, 0, 0, .60)"}}>
                    <div>{this.props.name}</div>
                    <div>{this.props.number}*{this.props.date}</div>
                </div>
                <div className="message-button">
                    <Link to={'/messages'}>
                        <button style={{boxShadow:"-10px 10px rgba(0, 0, 0, .60)"}}>Message</button>
                    </Link>
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
            date: new Date(),
            contacts: []
        }

        this._updateFullName = this._updateFullName.bind(this);
        this._updatePhoneNumber = this._updatePhoneNumber.bind(this);
        this._addContact = this._addContact.bind(this);
        this._getContacts = this._getContacts.bind(this);
    }

    componentDidMount() {
        const q = query(collection(this.props.db,"contacts"), orderBy("fullName"));
        getDocs(q).then((querySnapshot) => {
          this._getContacts(querySnapshot)
        })
      }

    _getContacts(querySnapshot) {
    let contactsData = [];
    querySnapshot.forEach((document) => {
        contactsData.push(document.data());
    });
    console.log(contactsData);
    this.setState({contacts: contactsData});
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
                    <div className="contact-holder">
                        <div className="add-contact-box">
                            <button onClick={this.modalOpen}>Add Contact</button>
                        </div>
                        <div className="contact-renders">
                        {this.state.contacts.map((contact) => <Contact name={contact.fullName} date={contact.date} number={contact.phoneNumber} key={contact.phoneNumber}/>)}
                        </div>
                        {/* <Contact name="Dusty Rover" number="222-666-7777" date="11-4-21" />
                        <Contact name="Space Junkie" number="333-565-8998" date="11-4-21" />
                        <Contact name="Neil Degrasse Tyson" number="100-200-3400" date="11-4-21" />
                        <Contact name="Team 4" number="444-444-4444" date="11-4-21" /> */}
                    </div>
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
                            <Link to={'/contacts'}>``
                                <button onClick={() => {
                                    this._addContact();
                                    this.theClosing();
                                    this.componentDidMount();
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
        const collectionRef = collection(this.props.db, "contacts");
        const payload = { fullName: this.state.fullName, phoneNumber: this.state.phoneNumber, date: new Date().toLocaleDateString() };
        addDoc(collectionRef, payload)

        this.setState({
            fullName: "",
            phoneNumber: ""
        })
    }

}

// _addMessage() {
//     const collectionRef = collection(this.props.data, "Messages");
//     const payload = { message: this.state.message, date: this.state.date.toLocaleDateString(), time: new Date().toLocaleTimeString() };
//     addDoc(collectionRef, payload)
//     this.setState({
//         message: ""
//     })
// }


// _addContact() {
//     const collectionRef = collection(this.props.db, "contacts");
//     const payload = { message: this.state.fullName, phoneNumber: this.state.phoneNumber, date: new Date().toLocaleDateString() };
//     setDoc(doc(this.props.db, "contacts"),{
//         fullName: this.state.fullName,
//         phoneNumber: this.state.phoneNumber,
//         date: new Date().toLocaleDateString()
//     });

//     this.setState({
//         fullName: "",
//         phoneNumber: ""
//     })
// }