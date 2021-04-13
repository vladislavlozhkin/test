import ReviewForm from 'components/ReviewForm';
import { useStore } from 'effector-react';
import {
  reviewStore,
  onNickname,
  onReviewText1,
  onReviewText,
  onReviewText2,
  onReviewText3,
  onSubmit,
  fxReviewCreate
} from 'models/reviewModel';

const ReviewFormContainer = () => {
  const values = useStore(reviewStore);
  const loading = useStore(fxReviewCreate.pending)

  return (
    <ReviewForm
      values={values}
      loading={loading}
      events={{
        onChangeNickName: onNickname,
        onChangeReviewText1: onReviewText1,
        onChangeReviewText2: onReviewText2,
        onChangeReviewText3: onReviewText3,
        onChangeReviewText: onReviewText,
        onSubmit,
      }}
    />
  );
};

export default ReviewFormContainer;
