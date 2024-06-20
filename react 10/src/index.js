import React from 'react';
import ReactDom from 'react-dom';
// import './index.css';

const heading = {
  color: 'orange',
  fontSize: '40px',
  textTransform: 'capitalize',
  textAlign: 'center',
  margin: '40px',
  fontFamily: 'Open Sans, sans-serif',
  backgroundColor: 'pink'
}

ReactDom.render(
  <>
  // using inline css property
    <h1 style={heading}>Hello, My name is shreyash</h1>
    <a href='https://webecom.netlify.app/' target='_shreyash'>
      <img src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' alt='nature-img' />
    </a>
  </>,
  document.getElementById("root")
);   