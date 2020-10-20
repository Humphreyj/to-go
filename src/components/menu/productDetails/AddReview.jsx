import React,{useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';

const AddReview = (props) => {
    const [newReviewRating, setnewReviewRating]=useState(5)
    const starClick = () => {
        if(newReviewRating === 5) {
            setnewReviewRating(0)
        }else {
            setnewReviewRating(newReviewRating => newReviewRating += 1);
        }
        console.log(newReviewRating)
      }
    return (
        <div className="review-modal">
                <h3>Leave a review for {props.name}</h3>
                <StarRatingComponent 
                className='stars'
                name="rate1" 
                starCount={5}
                value={newReviewRating}
                editing={true}
                onStarClick={starClick}
                />
                <p className="user">by: Current User</p>
                <input type="text" className="new-review-title" placeholder="Your review title"/>
                <textarea name="new-review-content" className='new-review-content'cols="30" rows="10" placeholder='Add your review Here'></textarea>
                <div className="add-review-buttons">
                <button className="submit-review">Submit</button>
                <button
                onClick={()=>props.set(false)} 
                className="cancel-review">Cancel</button>
                </div>
                
            </div>
    );
}

export default AddReview;
