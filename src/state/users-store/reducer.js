import { SAVE_USERS } from "./actions";

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        users: action.data
      };

    default:
      return state;
  }
};

export default usersReducer;
