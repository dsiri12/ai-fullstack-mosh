import { reviewRepository } from '../repositories/review.repository';
import { llmClient } from '../llm/client';

export const reviewService = {
   async summarizeReviews(productId: number): Promise<string> {
      console.log('DDDDd reviewService productId=', productId);

      const existingSummary =
         await reviewRepository.getReviewSummary(productId);
      if (existingSummary) {
         return existingSummary;
      }

      const reviews = await reviewRepository.getReviews(productId, 10);
      const joinedReviews = reviews.map((r) => r.content).join('\n\n');

      console.log('DDDDd 34533535 reviewService joinedReviews=', joinedReviews);

      const summary = await llmClient.summarizeReviews(joinedReviews);

      await reviewRepository.storeReviewSummary(productId, summary);

      return summary;
   },
};
