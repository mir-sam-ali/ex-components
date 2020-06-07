import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

function Slider(props) {
  let [autoPlay, setAutoPlay] = useState(true);
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel autoPlay={autoPlay} animation={"slide"} interval={"3000"}>
      {items.map((item) => (
        <div
          onMouseEnter={() => {
            setAutoPlay(false);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          <Item item={item} />
        </div>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default Slider;
