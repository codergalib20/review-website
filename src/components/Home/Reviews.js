import React, { useEffect, useState } from 'react';
import SingleReview from '../../hooks/SingleReview';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div className='container py-4 mb-5'>
      <h1 className='text-2xl md:text-4xl text-red-700 font-bold text-center py-8'>Reviews</h1>
      <div className="reviews_wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          reviews?.slice(0, 3)?.map((review, index) => <SingleReview key={index} review={review} />)
        }
      </div>
    </div>
  );
};

export default Reviews;