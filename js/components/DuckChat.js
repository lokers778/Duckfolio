import React, {Component} from "react"
import { ChatManager, TokenProvider } from "../../node_modules/@pusher/chatkit-client/react-native"
const DUMMY_DATA = [
    {
        senderId: 'Junior',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'Junior',
        text: 'Great! How about you?'
    },
    {
        senderId: 'Senior',
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
    componentDidMount() {
        const tokenProvider = new TokenProvider({
            url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/0c8cbde6-1264-4d14-8db0-731cdf00bee4/token"
        });


        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:0c8cbde6-1264-4d14-8db0-731cdf00bee4",
            userId: "Junior",
            tokenProvider: tokenProvider
        });
        chatManager.connect()
            .then(currentUser => {
                currentUser.subscribeToRoom({
                    roomId: "21557954",
                    hooks: {
                        onMessage: message => {
                            console.log("received message", message.text)
                        }
                    }
                })
            })
            .catch(err => {
                console.log('Error on connection', err)
            })

    }


    render() {
        return (

            <>
                <MessageList/>
                <h1>hello</h1>

            </>)
    }


}

export default DuckChat;