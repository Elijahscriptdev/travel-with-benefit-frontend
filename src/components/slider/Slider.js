import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import "./Slider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <div id='partner'>
      <h1 style={{ textAlign: "center", margin: "15px" }}>Our Partners</h1>
      <div className='App' >
        <Carousel breakPoints={breakPoints}>
          <Item className='one'></Item>
          <Item className='two'></Item>
          <Item className='three'></Item>
          <Item className='four'></Item>
          <Item className='five'></Item>
          <Item className='six'></Item>
          <Item className='seven'></Item>
          <Item className='eight'></Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
