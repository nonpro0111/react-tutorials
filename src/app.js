import React from 'react';
import { Link } from 'react-router';

export default function App() {
  return (
    <div>
      <h1>React チュートリアルApp 一覧</h1>
      <ul>
        <li><Link to="/message_app">メッセージApp</Link></li>
      </ul>
    </div>
  );
}
