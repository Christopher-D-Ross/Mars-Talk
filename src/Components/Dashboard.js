import React from "react";
import { Dashblock } from "./Dashblocks";
import { TitleMenu } from "./Title-Menu";
import { setDoc, doc, collection, query, getDocs } from "firebase/firestore";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            messages: [],
            groups: []
        }
        this._getContacts = this._getContacts.bind(this);
        // this._getMessages = this._getMessages.bind(this);

    }

    componentDidMount() {
        const q = query(collection(this.props.db,"contacts"));
        getDocs(q).then((querySnapshot) => {
          this._getContacts(querySnapshot)
        })
      }

    // componentDidMount() {
    //     const q2 = query(collection(this.props.db,"Messages"));
    //     getDocs(q2).then((querySnapshot) => {
    //         this._getMessages(querySnapshot)
    //     })
    // }

    _getContacts(querySnapshot) {
        let contactsData = [];
        querySnapshot.forEach((document) => {
            contactsData.push(document.data());
        });
        console.log(contactsData);
        this.setState({contacts: contactsData});
    }


    // _getMessages(querySnapshot) {
    //     let messagesData = [];
    //     querySnapshot.forEach((document) => {
    //         messagesData.push(document.data());
    //     });
    //     console.log(messagesData);
    //     this.setState({messages: messagesData});
    // }


    render () {
        return (
            <div className="dashboard-container">
                <div className="title-menu" style={{display:"flex", justifyContent:"space-between"}}>
                    <TitleMenu title="Dashboard" />
                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <div style={{display: "flex", gap:"40px"}}>
                        <Dashblock text="# of Contacts" number={this.state.contacts.length} phrase="" />
                        <Dashblock text="# of Sent Messages" number={this.state.messages.length} phrase="" />
                        <Dashblock text="# of Groups" number="5" phrase="" />
                    </div>
                </div>
            </div>
        )
    }
}