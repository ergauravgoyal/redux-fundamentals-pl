import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

var defaultState = {
  originAmount: "0.00"
};

function amount(state = defaultState, action) {
  if (action.type === "CHANGE_ORIGIN_AMOUNT") {
    return {
      ...state,
      originAmount: action.data.newAmount
    };
  } else if (action.type === "RECEIVED_CONVERSION_RATE") {
    return {
      ...state,
      conversionRate: resp.xRate,
      destinationAmount: resp.destAmount
    };
  }

  return state;
}

var logger = createLogger({
  collapsed: true
});
var store = createStore(amount, applyMiddleware(thunk, logger));

export default store;
