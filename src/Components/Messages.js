import React from "react";
import { TitleMenu } from "./Title-Menu";
import { setDoc, doc, collection, query, getDocs, addDoc, orderBy } from "firebase/firestore";


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
            <div className="message-container" >
                <p>{this.props.date}-{this.props.time}</p>
                <h4>{this.props.message}</h4>
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
            groups: [],
            messages: []
        }

        this._updateMessage = this._updateMessage.bind(this);
        this._addMessage = this._addMessage.bind(this);
        this._updateGroup = this._updateGroup.bind(this);
        this._addGroup = this._addGroup.bind(this);
        this._getMessages = this._getMessages.bind(this);
        this._showAlert = this._showAlert.bind(this);
        this._inputCloseOut = this._inputCloseOut.bind(this);
    }

    componentDidMount() {
        const q = query(collection(this.props.data,"Messages"), orderBy("date"));
        getDocs(q).then((querySnapshot) => {
          this._getMessages(querySnapshot)
        })
    }

    _getMessages(querySnapshot) {
        let messagesData = [];
        querySnapshot.forEach((document) => {
        messagesData.push(document.data());
    });
    console.log(messagesData);
    this.setState({messages: messagesData});
    };
    


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
                                <div>
                                    
                                </div>
                                <Name name="Neil" />
                                <Name name="Kratos" />
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
                            <div className="messages-in">
                                {this.state.messages.map((message) => <Message message={message.message} date={message.date} time={message.time}/>)}
                            </div>
                            <div className="message-input">
                                <input type="text" placeholder="Type Your Message, Click Send" value={this.state.message} onChange={this._updateMessage}></input>
                                <button onClick={() => {
                                    this._addMessage();
                                    this.componentDidMount();
                                }}>Send</button>
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
        const collectionRef = collection(this.props.data, "Messages");
        const payload = { message: this.state.message, date: this.state.date.toLocaleDateString(), time: new Date().toLocaleTimeString() };
        addDoc(collectionRef, payload)
        this.setState({
            message: ""
        })
    }

    _addGroup(event) {
        if(event.key === 'Enter') {
            setDoc(doc(this.props.data, "Group", this.state.group),{
                group: `#${this.state.group}`,
                groupMembers: []
            });
            alert(`You added ${this.state.group} to your groups!`);
    
            this.setState({
                group: ""
            })
        }
    }

    _showAlert(event) {
        if(event.key === 'Enter') {
            alert(`You added ${this.state.group} to your groups!`);
            console.log(`You added ${this.state.group} to your groups!`)
        }
    }

}




// _addMessage() {
//     const collectionRef = collection(this.props.data, "Messages");
//     const payload = { message: this.state.message, date: this.state.date.toLocaleDateString(), time: new Date().toLocaleTimeString() };
//     setDoc(doc(this.props.data, "Messages", "Frskn"),{
//         message: this.state.message,
//         date: this.state.date.toLocaleDateString(),
//         time: new Date().toLocaleTimeString()
//     });

//     this.setState({
//         message: ""
//     })
// }