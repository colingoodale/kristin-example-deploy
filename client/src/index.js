import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CometChat } from '@cometchat-pro/chat';

CometChat.init(process.env.REACT_APP_COMETCHAT_APPID)
.then(()=>{
  console.log('Initialized CometChat');
})
.catch(() => {
  console.log('Oh no. Failed.');
})

ReactDOM.render(<App />, document.getElementById('root'));
