import React, {Component} from 'react'
import '../../../styles/Game/ChatBox.css'
import {Launcher} from 'react-chat-window'

export class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [{
        author: 'them',
        type: 'text',
        data: {text:'hello'}
      }]
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {
    return (<div className=".chatbox">
      
      <Launcher 
        agentProfile={{
          teamName: 'Chat'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default ChatBox;