import React from 'react'
import Header from './Header.js'
import ChatList from './ChatList.js'
import MessageList from './MessageList'
import chatElemStyles from '../styles/Chat.module.css'

class Messenger extends React.Component {
    constructor(props) {
        super(props)
        this.openChat = this.openChat.bind(this)
		this.returnBack = this.returnBack.bind(this)
        this.state = {
            chatList: <ChatList open={this.openChat} />,
            messageList: '',
            header: 'chatlist',        }
    }

    openChat(event) {
        let {target} = event
        while (target.className !== chatElemStyles.Chat) {
			target = target.parentElement
			if (target === null) {
				return
			}
		}
        const id = target.getAttribute('id')
        this.setState({ chatList: ''})
        this.setState({messageList: <MessageList chatId={id} />})
        this.setState({header: 'messagelist'})
    }

    returnBack(event) {
        this.setState({messageList: ''})
        this.setState({chatList: <ChatList open={this.openChat} />})
        this.setState({header: 'chatlist'})
    }

    render() {
        return(
            <React.Fragment>
                <Header header={this.state.header} return={this.returnBack}/>
                {this.state.chatList}
                {this.state.messageList}
            </React.Fragment>
        )
    }
}

export default Messenger
