import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux'; // hook
import { increase, decrease } from '../modules/counter';

function CounterContainer() {
  const number = useSelector(state => state.counter); //useSelector를 통해 store 값을 가져오고  조회
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
}

export default CounterContainer;