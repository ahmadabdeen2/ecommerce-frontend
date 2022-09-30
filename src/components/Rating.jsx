import React from "react";
 
function Rating({ value, color ='orange', text, totalStars=5}) {
  const stars = [];
  for (let countStar = 0; countStar !== totalStars; countStar++) {
    stars.push(
      <i
        key={countStar}
        style={{color}}
        className={`${
          value - countStar > 0.5
            ? "fas fa-star"
            : value - countStar === 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        } py-5 text-xl`}
      ></i>
    );
  }
 
  return (
    <div className="rating">
      <span className=''>{stars} </span>
      <span className='text-gray-900 dark:text-gray-200'>{text && text}</span>
    </div>
  );
}
 
export default Rating;