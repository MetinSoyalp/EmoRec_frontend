import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../apis/review';
import { Review } from '../../types/Review';
import "./MovieReviews.css";
import { Pagination } from '@mui/material';
import ReviewCard from '../ReviewCard/ReviewCard';

type ProfileProps = {
    movieID: string;
};

function MovieReviews({ movieID }: ProfileProps) {
    const [reviewList, setReviewList] = useState<Review[]>([]);
    const [renderedReviewList, setRenderedReviewList] = useState<Review[]>([]);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(10); // default fallback
    const [pageNo, setPageNo] = useState(1);
    const [loading, setLoading] = useState(true);

    //For reviews: Requires reviews and reviewCard
    //Review List
    //Total
    //Page size - 10
    //Displayed Reviews List
    //Emotion chart collapsable

    //UseEffect to call reviews list review/movie/<movie_id>
    useEffect( () => {
        getMovieReviews(movieID)
            .then((rewList) => {
                setTotal( rewList.length )
                setPageSize(10)
                setReviewList(rewList);
                setRenderedReviewList(rewList.slice(0, pageSize));
            })
            .catch((err) => console.error("Failed to fetch reviews:", err))
            .finally(() => setLoading(false));
    }, [movieID]);

    const goToReviewPage = (newPage: number) => {
        setPageNo(newPage);
        const start = (pageNo - 1) * pageSize;
        const end = start + pageSize;
        setRenderedReviewList(reviewList.slice(start, end));
    };

    if (loading) return <div>Loading...</div>;

    return <div className='div-movieReviews'>
        <h2 className='movieReviews-title'>Reviews</h2>
        <ul className='review-list-container'>
                {renderedReviewList?.map((review) => (
                    <li key={review.MovieID} className="review-list-item">
                        <ReviewCard review={review}/>
                    </li>
                ) )}
            </ul>
        <div className='review-list-pagination'>
            <Pagination
                count={Math.ceil(total / pageSize)}
                page={pageNo}
                onChange={(_, newPage) => goToReviewPage(newPage)}
                color="primary"
                siblingCount={1}
                boundaryCount={1}
                sx={{
                    '& .MuiPaginationItem-root': {
                        '&:hover': {
                        backgroundColor: '#a9fdfd',
                        },
                    },
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: '#25ebeb',
                        color: '#000',
                        fontWeight: 'Bold',
                        '&:hover': {
                        backgroundColor: '#79ebeb',
                        },
                    },
                }}
            />
        </div>
    </div>
}

export default MovieReviews;