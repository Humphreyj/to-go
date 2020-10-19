import React from 'react';
import {product_reviews} from '../../../data/reviews';
import StarRatingComponent from 'react-star-rating-component';
const ProductReviews = (props) => {
    return (
        <div className="product-reviews">
            <p className="review-heading">Reviews for {props.name}</p>
            {product_reviews.map(review => {
                console.log(review)
                return (
                    
                    <div className="review">
                        
                        <div className="title-and-rating">
                            <StarRatingComponent 
                            className='stars'
                            name="rate1" 
                            starCount={5}
                            value={review.rating}
                            editing={false}
                            />
                            <p className="review-title">{review.review_title}</p>
                        </div>
                        <p className="review-content">{review.review_content}</p>
                        <p className="review-author">{review.review_author}</p>
                    </div>
                )
            })}
            <button className="add-review">Leave a review</button>
        </div>
    );
}

export default ProductReviews;
