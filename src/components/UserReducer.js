import { createStore } from "redux";

const initialState = {
  users: [
    {
      id: 1,
      name: "John",
      fullName: "John Doe",
      email: "johndoe@gmail.com",
      password: "john@123",
    },
    {
      id: 2,
      name: "varsha",
      fullName: "varsha aggarwal",
      email: "xyz@gmail.com",
      password: "varsha@123",
    },
    {
      id: 3,
      name: "RAm",
      fullName: "RAm aggarwal",
      email: "xyz@gmail.com",
      password: "varsha@123",
    },
  ],
};

const actionTypes = {
  addUser: "USER/ADD_USER",
};

//Reducer

export default function UserReducer(state = initialState, action) {
  //   switch (action.type) {
  //     // case "ADD_USER":
  //     //   return {
  //     //     ...state,
  //     //     users: users.push(action.payload),
  //     //   };

  //     default:
  //       return state;
  //   }
  return state;
}

//actions

export const addUser = (obj) => ({
  type: "USER/ADD_USER",
  payload: obj,
});

export const Store = createStore(UserReducer);
