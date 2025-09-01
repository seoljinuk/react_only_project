import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  StrictMode 모드는 개발 도중 발생할 수 있는 문제를 꼼꼼히 감지하기 위하여
  rendering을 두 번 실행해 줍니다.
  따라서,  <React.StrictMode>를 삭제하도록 합니다.
*/
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
