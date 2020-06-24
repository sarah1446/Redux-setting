// redux에 있는 상태를 조회하거나, 액션을 디스패치할 수 있는 컴포넌트를 의미

import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
// useSelector : state상태조회하는 훅
// useDispatch : 액션 디스패치할 때 사용하는 훅
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  const { number, diff } = useSelector(state => ({ // state파라미터는 store.getState의 객체(즉, redux의 현재 상태)
    number: state.counter.number,
    diff: state.counter.diff
  }));
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase()); // 액션생성함수 increase가 호출되면 액션객체가 만들어져서 디스패치됨
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;