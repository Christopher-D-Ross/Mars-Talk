import React from "react";
import { TitleMenu } from "./Title-Menu";
import { setDoc, doc, collection, query, getDoc } from "firebase/firestore";
import { db } from "../App";


export class Name extends React.Component {

    render () {

        return (
            <div className="name-box">
                <h2>{this.props.name}</h2>
            </div>
        )

    }
}


export class Message extends React.Component {

    render () {

        return (
            <div>

            </div>
        )
    }
}

export class MessageInput extends React.Component {

    render () {

        return (
            <div className="message-input">
                <input type="text">{this.state.message}</input>
            </div>
        )


    }
}



export class MessagesPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: "",
            date: new Date(),
            group: "",
            messages: null
        }

        this._updateMessage = this._updateMessage.bind(this);
        this._addMessage = this._addMessage.bind(this);
        this._updateGroup = this._updateGroup.bind(this);
        this._addGroup = this._addGroup.bind(this);
    }

    // Retrieval Practice
    // componentDidMount() {
    //     const q = query(collection(this.props.data, "messages"));
    //     getDoc(q).then(snapshot => {
    //         snapshot.forEach(doc => {
    //             console.log(doc.data())
    //         });
    //     })
    //     // console.log("mounted")
    //     // db.collection("Messages")
    //     //   .get()
    //     //   .then( snapshot => {
    //     //       const messages = []
    //     //       snapshot.forEach( doc => {
    //     //           const data = doc.data()
    //     //           messages.push(data)
    //     //       })
    //     //       this.setState({messages: messages})
    //     //       console.log(snapshot)
    //     //   })
    //     //   .catch( error => console.log(error))
    // }



    inputAppear() {
        document.getElementById("groupadd").style.display = "unset";
        document.getElementById("group-x").style.display = "unset";
    }

    _inputCloseOut(event) {
        if(event.key === 'Enter') {
            document.getElementById("groupadd").style.display = "none";
            document.getElementById("group-x").style.display = "none";
        }
    }

    _xCloseOut() {
        document.getElementById("groupadd").style.display = "none";
        document.getElementById("group-x").style.display = "none";
    }


    render () {

        return (
            <div className="message-page-container">
                <TitleMenu title="Messages" />
                <div className="message-grid-container">
                    <div className="message-grid">
                        <div className="names-box">
                            <div className="direct-box">
                                <h1>Direct Messages</h1>
                                <Name name="Neil" />
                                <Name name="Team 4" />
                                <Name name="Kalel" />
                            </div>
                            <div className="group-box">
                                <div className="group-header">
                                    <div>
                                        <h1>Groups</h1>
                                    </div>
                                    <div>
                                        <img onClick={this.inputAppear} className="add-icon" src="add-icon.png" alt="plus-sign"></img>
                                    </div>
                                </div>
                                <div>
                                    <input className="group-add" type="text" id="groupadd" value={this.state.group} onKeyPress={this._inputCloseOut} onKeyDown={this._addGroup} placeholder="Press enter to submit" onChange={this._updateGroup}></input>
                                    <span className="group-x" id="group-x" onClick={this._xCloseOut}>X</span>
                                </div>
                                <Name name="#Legion" />
                                <Name name="#Revenge" />
                                <Name name="#Axes" />
                            </div>
                        </div>
                        <div className="messages-box">
                            <div id="dm-title">
                                <h1>Messages</h1>
                            </div>
                                <div className="message-input">
                                    <input type="text" placeholder="Write message, press enter" value={this.state.message} onChange={this._updateMessage}></input>
                                    <button onClick={this._addMessage}>Send</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    _updateMessage(event) {
        console.log(this.state.message);
        this.setState({message: event.target.value})
    }

    _updateGroup() {
        console.log(this.state.group);
        this.setState({group: document.getElementById("groupadd").value})
    }
   
    _addMessage() {
        setDoc(doc(this.props.data, "Messages", "User6"),{
            message: this.state.message,
            date: this.state.date.toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        });

        this.setState({
            message: ""
        })
    }

    _addGroup(event) {
        if(event.key === 'Enter') {
            setDoc(doc(this.props.data, "Group", this.state.group),{
                group: `#${this.state.group}`
            });
    
            this.setState({
                group: ""
            })
        }
    }

}