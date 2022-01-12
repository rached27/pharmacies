import { GET_PHARMACIES } from './action';
const initialState = {
  pharmacies: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHARMACIES:
      return { ...state, pharmacies: state.pharmacies.concat(action.payload) };
    default:
      return state;
  }
};

export default myReducer;

