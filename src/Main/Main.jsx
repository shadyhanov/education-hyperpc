import React from 'react';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About';
import { Courses } from '../components/Courses/Courses';
import { Teachers } from '../components/Teachers/Teachers';
import { Footer } from '../components/Footer/Footer';

export const Main = () => {
  return <div>
    <Home/>
    <About/>
    <Courses/>
    <Teachers/>
    <Footer/>
  </div>;
};

