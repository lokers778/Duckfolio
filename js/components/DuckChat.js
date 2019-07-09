import React, {Component} from "react"
import { ChatManager, TokenProvider } from "../../node_modules/@pusher/chatkit-client/react-native"

class RoomList extends React.Component {
    render () {
        console.log(this.props.rooms)
        return (
            <div className="rooms-list">
                <h3>Rooms</h3>
              <ul>
                {this.props.rooms.map(room => {
                return (
                <li className="room" key={room.id}>
                <a href="#"># {room.name}</a>
                </li>
                )
            })}
              </ul>
            </div>
        )
    }
}

class SendMessage extends Component {
    state={
        message:""
    }
    handleChange =(e)=> {
        this.setState({message: e.target.value})

    }
    handleSubmit =(e)=> {
        e.preventDefault
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ""
        })

    }

    render() {
        return (
            <form className="sendMessage" onSubmit={this.handleSubmit}>
                <input placeholder="Type your message" type="text" onChange={this.handleChange} value={this.state.message}/>
            </form>
        )
    }
}

class Message extends Component {
    render() {
        return (
            <div className="message">

                    <div className="user">{this.props.userId}</div>
                    <div className="messageText">{this.props.text}</div>
            </div>
        )
    }
}

class MessageList extends React.Component {
    render() {
        return (

            <div className="messageList">
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} userId={message.senderId} text={message.text}/>

                    )

                })}
            </div>

        )
    }
}

class DuckChat extends Component {
   state={
       messages:[],
       joinableRooms: [],
       joinedRooms:[],
   }
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
                this.currentUser = currentUser
                this.currentUser.getJoinableRooms()
                    .then(joinableRooms => {
                        this.setState({
                            joinableRooms,
                            joinedRooms: this.currentUser.rooms
                        })
                    })
                    .catch(err => console.log('Error on joinableRooms: ', errr))
                this.currentUser.subscribeToRoom({
                    roomId: "21557954",
                    hooks: {
                        onMessage: message => {
                             console.log("received message", message.text)
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
            .catch(err => {
                console.log('Error on connection', err)
            })

    }
    sendMessage=(text)=> {
        this.currentUser.sendMessage({
            text:text,
            roomId:"21557954",
        })

    }


    render() {
       console.log(this.state.messages)
        return (

            <>
                <RoomList rooms={[...this.state.joinableRooms,...this.state.joinedRooms]} />
                <MessageList messages={this.state.messages}/>
                <SendMessage sendMessage={this.sendMessage}/>

            </>)
    }


}

export default DuckChat;