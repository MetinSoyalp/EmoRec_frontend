import { Review } from "../../types/Review";
import EmotionVector from "../EmotionVector/EmotionVector";
import "./ReviewCard.css";

type Props = {
    review: Review;
};

function ReviewCard({ review }: Props) {
    const formattedDate = new Date(review.Date).toLocaleString();

    return (
        <div className="review-card">
            <div className="review-header">
                <span className="review-username">{review.Username}</span>
                {review.Rating !== undefined && (
                    <span className="review-rating">⭐ {review.Rating}/10</span>
                )}
            </div>
            {review.Title && (
                <h3 className="review-title" title={formattedDate}>
                    {review.Title}
                </h3>
            )}
            {review.Body && (
                <p className="review-body">{review.Body}</p>
            )}
            <hr className="review-separator"/>
            <EmotionVector emotionVector={review.R_Emotion_Vector}/>
        </div>
    );
}

export default ReviewCard;