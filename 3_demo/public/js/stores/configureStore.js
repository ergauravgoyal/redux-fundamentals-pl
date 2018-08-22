import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

var defaultState = {
  originAmount: "0.00"
};
const logger = createLogger({
  collapsed: true
});

function amount(state = defaultState, action) {
  if (action.type === "CHANGE_ORIGIN_AMOUNT") {
    return {
      ...state,
      originAmount: action.data.newAmount
    };
  }

  return state;
}

var store = createStore(amount, applyMiddleware(logger));

export default store;
