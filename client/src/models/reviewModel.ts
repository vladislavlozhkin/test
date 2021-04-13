import { createEffect, createEvent, createStore, sample } from 'effector';

export const onReviewText = createEvent<React.ChangeEvent<HTMLTextAreaElement>>();
export const onReviewText1 = createEvent<React.ChangeEvent<HTMLInputElement>>();
export const onReviewText2 = createEvent<React.ChangeEvent<HTMLInputElement>>();
export const onReviewText3 = createEvent<React.ChangeEvent<HTMLInputElement>>();
export const onNickname = createEvent<React.ChangeEvent<HTMLInputElement>>();
export const reset = createEvent();
export const onSubmit = createEvent<() => void>();

const initialState = {
  reviewText: '',
  reviewText1: '',
  reviewText2: '',
  reviewText3: '',
  nickname: '',
};

export const reviewStore = createStore(initialState)
  .on(onReviewText, (state, e) => ({ ...state, reviewText: e.target.value }))
  .on(onReviewText1, (state, e) => ({ ...state, reviewText1: e.target.value }))
  .on(onReviewText2, (state, e) => ({ ...state, reviewText2: e.target.value }))
  .on(onReviewText3, (state, e) => ({ ...state, reviewText3: e.target.value }))
  .on(onNickname, (state, e) => ({ ...state, nickname: e.target.value }))
  .on(reset, () => initialState);

export const fxReviewCreate = createEffect(async (data: any) => {
  await fetch('http://localhost:4000/review/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
});

fxReviewCreate.finally.watch(() => reset());

sample({
  clock: onSubmit,
  source: reviewStore,
  target: fxReviewCreate,
})
