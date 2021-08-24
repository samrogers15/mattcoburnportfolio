import React from "react";
import Appbar from './Appbar';
import Header from './Header';
import Particles from 'react-particles';

const Home = () => {
  return (
    <div>
      <Appbar/>
      <Header/>
      <Particles 
        params={{
          particles: {
            number: {
              value: 45
            }
          }
        }}
      />
    </div>
  );
};

export default Home;
