import React,{useState} from 'react';
import {product_reviews} from '../../../data/reviews';
import StarRatingComponent from 'react-star-rating-component';
import AddReview from './AddReview';
import Backdrop from '../../../utils/Backdrop';
const ProductReviews = (props) => {

    const [leavingReview, setLeavingReview]=useState(false)
    const leaveReview = () => {
        setLeavingReview(true)
        
    }
    
    return (
        <div className="product-reviews">
            {leavingReview ? <AddReview 
                name={props.name}
                show={leavingReview}
                set={setLeavingReview}
            /> : ""}
            <Backdrop
            show={leavingReview} 
            />
            <p className="review-heading">Recent reviews for {props.name}</p>
            {product_reviews.map(review => {
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
            <button 
            onClick={leaveReview}
            className="add-review">Leave a review</button>
        </div>
    );
}

export default ProductReviews;
