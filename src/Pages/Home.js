import React from 'react';
import Banner from '../components/Home/Banner';
import Reviews from '../components/Home/Reviews';
import Footer from '../hooks/Footer';
import Header from '../hooks/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className='py-10'>
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;