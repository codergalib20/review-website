import React from 'react';

const SingleReview = ({ review }) => {

  const { avatar, name, title, image, profession } = review;
  return (
    <div className='shadow-lg hover:shadow-2xl transition-all duration-300 ease-linear  flex justify-between flex-col'>
      <div style={{
        height: '250px', borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
      }} className="overflow-hidden">
        <img className='w-full h-full' style={{ maxWidth: '100%' }} src={image} alt={title} />
      </div>
      <div className='p-2'>
        <h4 className='text-xl font-medium'>{title}</h4>
        <div className='w-16 h-1 bg-red-700 mt-3'></div>
      </div>
      <div className='p-2'>
        <div className='flex items-center'>
          <div>
            <div className='w-16 h-16 border-4 border-gray-100 overflow-hidden rounded-full shadow-lg shadow-red-900'>
              <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={avatar} alt={name} />
            </div>
          </div>
          <div className='flex justify-evenly flex-col ml-3'>
            <strong className='text-lg font-bold text-red-800'>{name}</strong>
            <strong className='text-gray-700 font-medium ' style={{ fontSize: '16px' }}>{profession}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;