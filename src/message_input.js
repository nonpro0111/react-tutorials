import React from 'react';

export default class MessageInput extends React.Component {
  update(e) {
    this.props.onChange(e.target.value);
  }

  save(e) {
    // Enter == 13
    if (e.keyCode == 13) {
      this.props.onSave(e.target.value);
      e.target.value = '';
    }
  }


  render() {
    return(
      <input type="text" onChange={(e) => this.update(e)}
        onKeyDown={(e) => this.save(e)} />
    );
  }
}
