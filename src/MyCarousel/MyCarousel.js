import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap';
import './Indicators.css';
import CustomButton from '../CustomButton/CustomButton';

class MyCarousel extends Component {
  render() {
    const settings = {
      controls: false,
      indicators: true,
      wrap: true,
      interval: 3000,
    };
    return (
      <div style={{ marginTop: '5%' }}>
        <p className="heading-carousel">Activities Showcase</p>
        <div>
          <Carousel {...settings} className="desktop-carousel">
            <Carousel.Item>
              <div className="carousel-root">
                <div className="border-div">
                  <div className="image-div">
                    <img
                      style={{ height: '100%' }}
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1499578124509-1611b77778c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
                      alt="First slide"
                    />
                  </div>
                </div>
                <div className="border-div">
                  <div className="content-div">
                    <p className="event-heading-carousel">Robo Wars 2020</p>
                    <p className="event-description-carousel">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-root">
                <div className="border-div">
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <img
                      style={{ height: '100%' }}
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                      alt="First slide"
                    />
                  </div>
                </div>
                <div className="border-div">
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#20201F',
                    }}
                  >
                    <p className="event-heading-carousel">Lorem Ipsum 2020</p>
                    <p className="event-description-carousel">
                      Event synopsis/ description goes here.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-root">
                <div className="border-div">
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <img
                      style={{ height: '100%' }}
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                      alt="First slide"
                    />
                  </div>
                </div>
                <div className="border-div">
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: '#20201F',
                    }}
                  >
                    <p className="event-heading-carousel">Star Gazing 2020</p>
                    <p className="event-description-carousel">
                      Event synopsis/ description goes here.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel {...settings} className="mobile-carousel">
            <Carousel.Item>
              <div>
                <div className="border-div" style={{ width: '100%' }}>
                  <Card
                    style={{
                      width: '100%',
                      background: '#20201f',

                      fontFamily: 'Roboto Slab',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: 'start' }}>
                        Robo Wars 2020
                      </Card.Title>
                      <Card.Text style={{ textAlign: 'start' }}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <CustomButton text="Read More" />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="border-div" style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    height: '100%',
                    background: '#20201f',

                    fontFamily: 'Roboto Slab',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'start' }}>
                      Robo Wars 2020
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'start' }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <CustomButton text="Read More" />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MyCarousel;
