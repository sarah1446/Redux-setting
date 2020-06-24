//Counter.js(프리젠테이션 컴포넌트) 
// -> store에 직접 접근하지 않고 필요한 값, 함수를 props로만 받아와서 사용하는 컴포넌트
// ->주로 ui 선언하는데 집중함
import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) { //props
  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10)); // input value 기본값은 문자열
  }
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )

}

export default Counter;