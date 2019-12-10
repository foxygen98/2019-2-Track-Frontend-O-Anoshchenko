import React from 'react'
import Header from './Header.js'
import ChatList from './ChatList.js'
import MessageList from './MessageList'
import Profile from './Profile'
import { HashRouter, Route } from 'react-router-dom'

class Messenger extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path='/profile'>
                    <Header header='editprofile'/>
                    <Profile />
                </Route>
                <Route exact path='/'>
                    <Header header='chatlist' />
                    <ChatList />
                </Route>
                <Route path='/chat/:chatId'>
                    <Header header='messagelist' />
                    <MessageList />
                </Route>
            </HashRouter>
        )
    }
}

export default Messenger
