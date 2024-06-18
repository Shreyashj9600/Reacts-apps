var React = require('react');
var ReactDom = require('react-dom');

// import React from 'react';
// import ReactDom from 'react-dom';


// ReactDom.render(<h1>hello world !</h1>,
//   document.getElementById('root')
// );

// how browser understan this code by using bable.
ReactDom.render(React.createElement('h1',
  null,
  "hello world !2 "
),
document.getElementById('root'));

var h1 = document.createElement('h1');
h1.innerHTML = 'hello world ! using pure JS';
document.getElementById('root').append(h1);