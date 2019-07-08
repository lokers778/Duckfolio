import React, {Component} from "react"
import Chatkit from "../../node_modules/@pusher/chatkit"

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
]


class MessageList extends React.Component {
    render() {
        return (
            <div className="messageList">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="user">{message.senderId}</div>
                        <div className="messageText">{message.text}</div>

                            </div>
                    )

                })}
            </div>

        )
    }
}


class DuckChat extends Component {
    render() {
        return (
            <>
                <MessageList/>
                <h1>hello</h1>

            </>)
    }


}

export default DuckChat;