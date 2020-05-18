import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Header from './Header.js'
import ChatList from './ChatList.js'
import MessageList from './MessageList'
import Profile from './Profile'
import Boundary from './Boundary'

class Messenger extends React.Component {
    render() {
        return (
            <Boundary>
                <HashRouter>
                    <Route path='/profile'>
                        <Header header='editprofile' />
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
            </Boundary>
        )
    }
}

export default Messenger
