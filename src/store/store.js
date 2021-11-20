import { createStore } from "redux";

const initialState = [];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      console.log(state, " state");
      const updateContact = state.filter((contact) => {
        console.log(contact); //8971
        console.log(action.payload); //8771
        contact.id === action.payload;
      });
      console.log(updateContact);
      return state;

    default:
      return state;
  }
};
if (module.hot) {
  // Accept hot update
  module.hot.accept();
}
const store = createStore(contactReducer);

export default store;
