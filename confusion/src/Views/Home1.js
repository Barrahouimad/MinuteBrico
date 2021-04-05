import React from 'react';
import './home1.css';
import Cards from '../Components/home/Cards';
import HeroSection from '../Components/home/HeroSection';
import Footer from '../Components/home/Footer';
import Comment from '../Components/home/Comment';
import Nav from '../Components/home/nav';

function Home1() {
  return (
    <>
      <Nav/>
      <HeroSection />
      <Comment />
      <Cards />
      <Footer />
    </> 
  );
}

export default Home1;
