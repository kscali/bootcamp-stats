import { RECEIVE_USER } from "../actions/data_actions";

const DataReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default DataReducer;
