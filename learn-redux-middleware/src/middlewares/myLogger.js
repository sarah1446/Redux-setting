const myLogger = store => next => action => { // 함수를 리턴하는 함수를 리턴..
  console.log(action);
  console.log('\tPrev', store.getState());
  const result = next(action);
  console.log('\tNext', store.getState()); //액션이 리듀서에서 처리되고난 다음 상태를 콘솔에 출력
  return result;
};

export default myLogger; 