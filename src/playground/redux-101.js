import { createStore } from 'redux';

const decrementCount = ({decrementBy = 1}={}) => ({
  type : 'DECREMENT',
  decrementBy
});

const setCount = ({count=0}) =>({
  type: 'SET',
  count
});

const resetCount = () =>({
  type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:101}));

