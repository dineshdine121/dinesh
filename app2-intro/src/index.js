import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Person_Parent } from './Assignments/Person_Parent';
import { ChatApplication_Parent } from './Assignments/ChatApplication_Parent';
import { EcommerceCart_Parent } from './Assignments/EcommerceCart_Parent';
import { GameCharcter_Parent } from './Assignments/GameCharcter_Parent';
import { MusicPlayer_Parent } from './Assignments/MusicPlayer_Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Person_Parent/>
    <ChatApplication_Parent/> */}
    {/* <EcommerceCart_Parent/> */}
    {/* <GameCharcter_Parent/> */}
    <MusicPlayer_Parent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
