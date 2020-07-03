//type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기상태 (꼭 객체거나 배열일 필요 없음 숫자여도 무관)
const initialState = 0;

//reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}