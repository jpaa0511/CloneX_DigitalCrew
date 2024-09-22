import { userTypes } from "../types/UserTypes";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case userTypes.logIn:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case userTypes.logOut:
      return {
        ...state,
        logged: false,
        user: null,
      };
    default:
      return state;
  }
};
