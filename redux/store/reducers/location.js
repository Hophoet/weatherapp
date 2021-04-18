import {
		SET_USER_LOCATION,
} from '../actions';

const intialState = { userLocation:{text:'default location' }};

const reducer = (state = intialState, action) => {
  let newState;
  switch (action.type) {
	case SET_USER_LOCATION:
		const userLocation = action.value;
		newState = {
			...state,
			userLocation: userLocation,
		};
		return newState;
	
    default:
		return state;
  }
};
export default reducer;
