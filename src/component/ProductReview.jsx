import React from 'react'
import '../styles/productReview.css'
import ProductReviewCard from "./ProductReviewCard"
const ProductReview = ({productReviews}) => {
  return (
    <div className="productReview">
    
    {productReviews.map((item,index) => (
        <ProductReviewCard price={item.price} name= {item.name} image= {item.image} review={item.review} index={index} key={item.image}  />
    ))}
    </div>
  );
};

export default ProductReview