//Reducer function which returns an array
//Reducer are always called with two arguments - current state, action
const reducer = (state = [], action) => {
	if (action.type === 'split_string') {
      return action.payload.split('');
  } else if (action.type === 'add_character' ) {
			return [ ...state, action.payload ];
  }
  
	return state;
};
//Create a store
const store = Redux.createStore(reducer);

store.getState();

//Action is plain JS
//Action always has the 'type'
const action = { 
  type: 'split_string', 
  payload: 'asdf' 
};

//Feeding action to the reducer
store.dispatch(action);

store.getState();



const action2 = {
  type: 'add_character',
  payload: 'a'
};

store.dispatch(action2);
store.getState();
