import React from 'react';
import axios from 'axios';
import { authorizationHeader } from '../../lib/auth';
import Sidebar from './Sidebar';
import Conversation from './Conversation';
import Compose from './Compose';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pickConversation = this.pickConversation.bind(this);
    this.createMessage = this.createMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/messages', authorizationHeader())
      .then(result => this.setState({ messages: result.data }));
  }

  pickConversation(withUserId) {
    this.setState({ withUserId: withUserId, newMessage: null });
  }
  handleChange(e) {
    const { target: {name, value} } = e;
    this.setState({ [name]: value });
  }


  createMessage() {
    axios.post('/api/messages', {
      content: this.state.newMessage,
      to: this.state.withUserId
    }, authorizationHeader())
      .then(result => this.setState({
        messages: this.state.messages.concat(result.data)
      }));
  }

  deleteMessage(id) {
    console.log('deleting message', id);
    axios.delete(`/api/messages/${id}`, authorizationHeader())
      .then(() => this.setState({
        messages: this.state.messages.filter(m => m._id !== id)
      }));
  }

  render() {
    const messages = this.state.messages;
    return(
      <main>
        <h1 className="title is-2">Messages</h1>
        <div className="message-container">
          <div className="sidebar">
            <Sidebar messages={messages} handleClick={this.pickConversation}/>
          </div>
          <div className="messages-main">
            <div className="conversation">
              <Conversation handleDelete={this.deleteMessage} {...this.state}/>
            </div>
            <div className="compose">
              <Compose handleChange={this.handleChange}
                handleSubmit={this.createMessage}
                {...this.state}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Messages;
