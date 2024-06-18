var React = require('react');
var ReactDom = require('react-dom');

// import React from 'react';
// import ReactDom from 'react-dom';

// learn React.Fragment <> </>.
ReactDom.render(
  <React.Fragment>
    <h1>hello world !</h1>
    <p>this is a paragraph</p>
  
  </React.Fragment>,
  document.getElementById('root')

);