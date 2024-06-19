import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

ReactDom.render(
  <>
  <h1 className='heading'>Shreyash Technicl Netflix Pick </h1>
  <p className='subTitle'>list of five Best series.</p>
  <ol className='item'>
    <li>Dark</li>
    <li>Extra Curricular</li>
    <li>My Holo Love</li>
    <li>My first-2 Love</li>
    <li>Mr Robot</li>
  </ol>
  </>,
  document.getElementById('root'),
)