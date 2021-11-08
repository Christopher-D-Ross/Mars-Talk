import React from "react";
import { TitleMenu } from "./Title-Menu";


export class Name extends React.Component {

    render () {

        return (
            <div className="name-box">
                <h2>{this.props.name}</h2>
            </div>
        )

    }
}



export class MessageSend extends React.Component {

    render () {

        return (
            <div>

            </div>
        )
    }
}

export class MessageRec extends React.Component {

    render () {

        return (
            <div>

            </div>
        )
    }
}



export class MessagesPage extends React.Component {

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
                                <h1>Groups</h1>
                                <Name name="#Legion" />
                                <Name name="#Revenge" />
                                <Name name="#Axes" />
                            </div>
                        </div>
                        <div className="messages-box">
                            <div id="dm-title">
                                <h1>Messages</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
   
}