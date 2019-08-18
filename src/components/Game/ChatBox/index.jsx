import React from 'react';
import ReactDOM from 'react-dom';
import "../../../styles/Game/ChatBox.css"
import Message from './Message.js';

import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEmojiPicker: false,
            chats: [{
                username: "Kevin Hsu",
                content: <p>Hello World!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Love it! :heart:</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Check out my Github at https://github.com</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "KevHs",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "http://i.imgur.com/ARbQZix.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>So</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Chilltime is going to be an app for you to view videos with friends</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>You can sign-up now to try out our private beta!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Definitely! Sounds great!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.addEmoji = this.addEmoji.bind(this);
        this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    toggleEmojiPicker() {
        this.setState({
          showEmojiPicker: !this.state.showEmojiPicker,
        });
      }
      
    addEmoji(emoji) {
        ReactDOM.findDOMNode(this.refs.msg).value +=`${emoji.native}`;
        
        this.setState({
            showEmojiPicker:false
        })
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Kevin Hsu";
        
        const { showEmojiPicker, chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Chat</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                    {showEmojiPicker ? (
                            <Picker set="emojione" onSelect={this.addEmoji} />
                            ) : null}
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    
                    <button
                        type="button"
                        className="toggle-emoji"
                        onClick={this.toggleEmojiPicker}
                    >
                        <span className="emoji-icon">😀</span>
                    </button>
                    <input type="text" ref="msg" pattern="^(?!\s*$).+" required/>
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default ChatBox;