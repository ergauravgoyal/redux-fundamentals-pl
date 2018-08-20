import { createStore } from "redux";

var defaultState = {
  originAmount: "0.00"
};

//amount reducer
function amount(state = defaultState, action) {
  console.log("state", state);
  if (action.type === "CHANGE_ORGIN_AMOUNT") {
    return Object.assign({}, state, { originAmount: action.data });
  }
  return state;
}
var store = createStore(amount);

export default store;
