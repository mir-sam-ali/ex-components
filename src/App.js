import React from 'react';
import logo from './logo.svg';

import './App.css';
import Antd from './Antd/Antd';
import MyCarousel from './MyCarousel/MyCarousel';
import Calender from './Calender/Calender';
import { Container } from 'react-bootstrap';
import Featured from './Featured/Featured';

function App() {
  return (
    <div className="App">
      <div className="my-container">
        <Featured />
        <MyCarousel />
        <Calender
          events={[
            {
              date: 5,
              image:
                'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              name: 'Lorem Ipsum',
            },
            {
              date: 20,
              image:
                'https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
              name: 'Lorem Ipsum',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
