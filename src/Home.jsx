import React from 'react';
import web from '../src/images/home.jpg'
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common
        name=" Grow your Business with"
        imgsrc={web}
        visit="/services"
        btname="Let's make"
      />
    </>
  )
}

export default Home;
