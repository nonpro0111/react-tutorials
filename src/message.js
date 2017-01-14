import React from 'react';

export default function Message(props) {
  const messages = props.savedMessages.map((message, index) => {
    return (
      <li key={index}>{message}</li>
    );
  });

  return (
    <div>
      <p>入力中: {props.message}</p>
      <p>保存済み</p>
      <ul>
        {messages}
      </ul>
    </div>
  );
}
