import React from 'react';

const Banner = () => {
  const bannerStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://i.ibb.co/hRK5QwF/photo-1552519507-da3b142c6e3d.jpg) no-repeat top center`,
    backgroundSize: 'cover',
    zIndex: "-1"
  }
  return (
    <div style={bannerStyles}>
      <div className="container min-h-screen  flex flex-col justify-center">
        <div style={{ maxWidth: '800px' }}>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-50 pb-3 font-bold'>The Way People Shop for Auto-Related <span className='text-red-700'>Businesses</span></h1>
          <p className='text-gray-50 font-bold text-lg'>According to IHS Automotive, the number of vehicles on the road in the U.S. has reached a record level of almost 253 million. This is a level that the auto industry hasn’t seen in the U.S. since 2004-05. What does this mean to auto dealers and mechanics?</p>
          <button className='bg-gray-900 text-lg px-6 py-2 text-gray-50 hover:text-gray-900 hover:bg-gray-50 mt-3 rounded-md transition-all duration-150 ease-linear'>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;