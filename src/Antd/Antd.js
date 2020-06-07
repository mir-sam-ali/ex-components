import React from "react";
import "./Antd.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";

class Antd extends React.Component {
  carousel = React.createRef();

  componentDidMount() {
    console.log(this.carousel);
  }
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      dotPosition: "bottom",
      infinite: true,
      speed: 1000,
    };
    return (
      <Carousel
        {...settings}
        slidesToShow={1}
        ref={(node) => (this.carousel = node)}
        afterChange={(current) => {
          console.log(current);
        }}
      >
        <div>
          <img src="https://images.unsplash.com/photo-1589699576824-9b34434637f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=800&q=60" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1589691962030-8d2b7f2a1ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        </div>
      </Carousel>
    );
  }
}

export default Antd;
