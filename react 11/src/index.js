import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

let currDate = new Date();
currDate = currDate.getHours();
let greating = '';
let cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greating = 'Good Morning';
  cssStyle.color = 'green'
} else if (currDate >= 12 && currDate <= 19) {
  greating = 'Good Afternoon'
  cssStyle.color = 'orange'
} else {
  greating = 'Good Night'
  cssStyle.color = 'black'
}


ReactDom.render(
  <>
    <h1 className='heading'>Hello sir,<span style={cssStyle}>{greating}</span></h1>
  </>,
  document.getElementById('root')
)