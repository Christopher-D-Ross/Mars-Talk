import React from "react";
import { TitleMenu } from "./Title-Menu";






export class Message extends React.Component {

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
            <div>
                <TitleMenu title="Messages" />
                <div className="message-grid-container">
                    <div className="message-grid">
                        <div className="names-box">
                            <div>
                                <h1>Direct Messages</h1>
                            </div>
                            <div>
                                <h1>Groups</h1>
                            </div>
                        </div>
                        <div className="messages-box">
                            <h1>Messages</h1>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
   
}