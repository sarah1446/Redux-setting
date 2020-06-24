import { createStore } from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 생성함수
const increase = () => ({
    //화살표함수에선 리턴생략 가능
    type: INCREASE,
})

const decrease = () => ({
    type: DECREASE,
})

const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

//리듀서
function reducer(state = initialState, action) {
    // 리덕스에서 초기 상태 만들때 리듀서 한번 호출해서 당시 state가 비어있으면
    // default 값으로 undefined가 되니까 초기상태가 안만들어져서 initialState해줌
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text //changeText함수에서 인자로 text받아옴
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item) //새로운 배열만드는 함수  사용해서 기존값은 유지시킴
            }
        default:
            return state;
    }
}

//store만들기
const store = createStore(reducer);
console.log(store.getState());

const listner = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listner);
// unsubscribe(); // 구독해제할 때 호출하면 됨 

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('Hello'));
store.dispatch(addToList({ id: 1, text: '와우!' }));

window.store = store;

//특정액션에 dispatch되면 스토어 상태가 업데이트되고 
//상태가 업데이트되면 구독했던 함수가 호출