import React from 'react';

import Intro from "../../components/Layout/Intro"
import Section from "./../../components/Layout/Section"

import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="container">
        <Breadcrumb className='py-4' items={[
          {
            title: (
              <NavLink
                to="/"
              >
                Home
              </NavLink>
            ),
          },
          {
            title: (
              <NavLink
                to="/flowers"
              >
                Flowers
              </NavLink>
            ),
          },]}
        />
        </div>
      
      <Intro />
      <Section />

    </div>
  );
};

export default Home;