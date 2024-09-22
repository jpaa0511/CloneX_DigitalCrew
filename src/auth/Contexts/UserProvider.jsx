import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { UserReducer } from "../Reducers/UserRedus";
import { userTypes } from "../types/UserTypes";

const initialState = {
  logged: false,
  user: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, initialState, init);

  const loginUser = (userData = {}) => {
    const action = {
      type: userTypes.logIn,
      payload: {
        uid: new Date().getTime(),
        name: userData.name || "Usuario",
        email: userData.email || "usuario@example.com",
      },
    };
    localStorage.setItem("user", JSON.stringify(action.payload));
    dispatch(action);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    dispatch({ type: userTypes.logOut });
  };

  return (
    <UserContext.Provider
      value={{
        ...userState,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
