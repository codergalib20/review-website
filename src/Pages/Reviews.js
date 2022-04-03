import React, { useEffect, useState } from 'react';
import Footer from '../hooks/Footer';
import Header from '../hooks/Header';
import SingleReview from '../hooks/SingleReview';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <Header/>
      <div className='container '>
        <h1 className='text-2xl md:text-4xl mt-20 text-red-700 font-bold text-center py-8'>Reviews</h1>
        <div className="reviews_wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
          {
            reviews?.map((review, index) => <SingleReview key={index} review={review} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;