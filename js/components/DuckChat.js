import React, {Component} from "react"
import ReactDOM from "react-dom"
import { ChatManager, TokenProvider } from "../../node_modules/@pusher/chatkit-client/react-native"

class RoomList extends React.Component {
    render () {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)

        return (
            <div className="rooms-list">
                <h3>Rooms</h3>

              <ul>
                {orderedRooms.map(room => {
                    const active = this.props.roomId === room.id ? "active" : "";
                return (
                <li className={"room" + active} key={room.id}>
                <a onClick={()=>{this.props.subscribeToRoom(room.id)}} ># {room.name}</a>
                </li>
                )
            })}
              </ul>
            </div>
        )
    }
}

class NewRoomForm extends React.Component {
    state = {
        roomName: ''
    }
    handleChange=(e)=> {
        this.setState({
            roomName: e.target.value
        })
    }
    handleSubmit=(e)=> {
        e.preventDefault()
        this.props.createRoom(this.state.roomName)
        this.setState({roomName: ''})

    }
    render () {
        return (
            <div className="new-room-form">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="Add Room" value={this.state.roomName} required />
                    <button id="create-room-btn" type="submit">+</button>
                </form>
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
        e.preventDefault();
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
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        if (!this.props.roomId) {
            return(
            <div className="message-list">
                <div className="join-room">
                    &larr; Join a room!
                </div>
            </div>
            )
        }
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
       roomId: null,
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
            userId: "Senior",
            tokenProvider: tokenProvider
        });
        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
                this.getRooms();


            })
            .catch(err => {
                console.log('Error on connection', err)
            })

    }

    getRooms=()=>{
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
            .catch(err => console.log('Error on joinableRooms: ', err))
    };
    subscribeToRoom=(roomId)=>{
this.setState({
    messages:[]
})
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
            .then(room => {
                this.setState({
                    roomId: room.id
                })
                this.getRooms()
            })
            .catch(err => console.log('Error on subscribing to room: ', err))
    }

    createRoom=(roomName)=> {
        this.currentUser.createRoom({
            name: roomName
        })
            .then(room => this.subscribeToRoom(room.id))
    }
    sendMessage=(text)=> {
        this.currentUser.sendMessage({
            text:text,
            roomId:this.state.roomId
        })

    }


    render() {
        return (

            <>
                <RoomList roomId={this.state.roomId} subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms,...this.state.joinedRooms]} />
                <MessageList messages={this.state.messages} roomId={this.state.roomId}/>
                <SendMessage sendMessage={this.sendMessage}/>
                <NewRoomForm createRoom={this.createRoom}/>
            </>)
    }


}

export default DuckChat;