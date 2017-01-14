import React from 'react';
import Message from './message';
import MessageInput from './message_input';

export default class MessageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      savedMessages: []
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
  }

  updateMessage(text) {
    this.setState({message: text});
  }

  saveMessage(text) {
    this.setState(prevState => {
      { savedMessages: prevState.savedMessages.push(text) }
    });
  }

  render() {
    return (
      <div>
        <p>1. 入力中のテキストを表示</p>
        <p>2. Enterでテキストを保存</p>
        <MessageInput onChange={this.updateMessage} onSave={this.saveMessage} />
        <Message message={this.state.message} savedMessages={this.state.savedMessages} />
      </div>
    );
  }
}
