import React from "react";
import ReactDom from "react-dom";
import Cards from "./Cards";
import './index.css';
import Sdata from "./Sdata";


ReactDom.render(
  <>
    <h1 className="heading_style">List of top 5 netflix Serise in 2024</h1>


    {Sdata.map((val, index) => {
      console.log(index)
      return (
        <Cards
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      )
    })}

    {/* using function keyword */}
    {/* {Sdata.map(function ncard(val) {
      return (
        <Cards
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      )
    })} */}

  </>
  ,
  document.getElementById('root')
)