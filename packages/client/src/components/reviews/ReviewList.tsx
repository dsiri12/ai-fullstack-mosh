import axios from 'axios';
import { useEffect, useState } from 'react';

type Props = {
   productId: number;
};

type Review = {
   id: number;
   author: string;
   content: string;
   rating: number;
   createdAt: string;
};

type GetReviewsResponse = {
   summary: string | null;
   reviews: Review[];
};

const ReviewList = ({ productId }: Props) => {
   const [reviewData, setReviewData] = useState<GetReviewsResponse>();

   useEffect(() => {
      const fetchReviews = async () => {
         const { data } = await axios.get<GetReviewsResponse>(
            `/api/v1/products/${productId}/reviews`
         );
         setReviewData(data);
      };

      fetchReviews();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div className="flex flex-col gap-5">
         {reviewData?.reviews.map((review) => (
            <div key={review.id}>
               <div className="font-semibold">{review.author}</div>
               <div>Rating: {review.rating}/5</div>
               <p className="py-2">{review.content}</p>
            </div>
         ))}
      </div>
   );
};

export default ReviewList;
