import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Featured.css';
import CustomButton2 from './CustomButton2/CustomButton2';

const Featured = (props) => {
  const settings = {
    controls: false,
    indicators: true,
    wrap: true,
    interval: 3000,
  };
  return (
    <div className="border-root-featured">
      <Carousel {...settings} style={{ background: '#20201f' }}>
        <Carousel.Item>
          <div className="carousel-root-featured">
            <div className="content-div-featured">
              <p className="featured-heading">Featured.</p>
              <p className="featured-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                vcsdvsdv ds v button-div-featured-desktopsd
              </p>
              <div className="button-div-featured-desktop">
                <CustomButton2 text="Read full article" />
              </div>
            </div>
            <div className="image-div-featured">
              <div className="image-featured">
                <img
                  className="d-block w-100"
                  src="https://www.freepngimg.com/thumb/computer%20pc/2-computer-desktop-pc-png-image.png"
                  alt="First slide"
                />
              </div>
              <div className="button-div-featured-mobile">
                <CustomButton2 text="Read full article" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-root-featured">
            <div className="content-div-featured">
              <p className="featured-heading">Featured.</p>
              <p className="featured-description">
                Featured student projects, awards, news, updates, announcements,
                activities, articles, etc. go here
              </p>
              <div className="button-div-featured-desktop">
                <CustomButton2 text="Read full article" />
              </div>
            </div>
            <div className="image-div-featured">
              <div className="image-featured">
                <img
                  className="d-block w-100"
                  src="https://www.freepngimg.com/thumb/drone/21583-5-drone-transparent.png"
                  alt="First slide"
                />
                <div className="button-div-featured-mobile">
                  <CustomButton2 text="Read full article" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-root-featured">
            <div className="content-div-featured">
              <p className="featured-heading">Featured.</p>
              <p className="featured-description">
                Featured student projects, awards, news, updates, announcements,
                activities, articles, etc. go here
              </p>
              <div className="button-div-featured-desktop">
                <CustomButton2 text="Read full article" />
              </div>
            </div>
            <div className="image-div-featured">
              <div className="image-featured">
                <img
                  className="d-block w-100"
                  src="https://www.freepngimg.com/thumb/satellite/7-2-satellite-png-hd.png"
                  alt="First slide"
                />
                <div className="button-div-featured-mobile">
                  <CustomButton2 text="Read full article" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Featured;
