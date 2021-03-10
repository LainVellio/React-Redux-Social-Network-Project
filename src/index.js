import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
  { id: 1, name: 'Dmitry' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Sergey' },
  { id: 4, name: 'Pavel' },
  { id: 5, name: 'Vadim' },
];

const messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'I am fine' },
];

const postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 15 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
