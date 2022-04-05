import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../CustomHook/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const CoustomReview = () => {
    const [reviews, setReviews]=useReviews()
    return (
       
        <div>
        <h1 className="text-3xl font-bold  my-10 flex justify-center">
          Customer Reviews(3)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCart review={review} key={review.id}></ReviewCart>
          ))}
        </div>

        <Link to="reviewpage" className="flex justify-center">
          <button className="mt-10 bg-indigo-600 rounded py-2 font-bold text-cyan-50 px-20">
            See All Reviews
          </button>
        </Link>
      </div>
    );
};

export default CoustomReview;