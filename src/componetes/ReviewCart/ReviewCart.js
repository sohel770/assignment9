import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { Rating } from 'react-simple-star-rating';
import './ReviewCart.css'

const ReviewCart = ({review}) => {
    const {img,name,title,rating} = review
    return (
        <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4">
             <div>
          <img className="img" src={img} alt="" srcset="" />
        </div>
        <h2 className="text-xl font-bold flex justify-center m-5">{name}</h2>
        <p className="flex justify-center mt-5 mb-5">{title}</p>

        
         <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar}  />
        <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar}   />
        <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar}   />
        <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar}   />
        <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar}   /> 



        </div>
    );
};

export default ReviewCart;