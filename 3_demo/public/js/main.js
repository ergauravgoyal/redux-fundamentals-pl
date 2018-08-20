import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Conversion from "./container/conversion.js";
import store from "./store/configureStore";

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <Conversion />
      </div>
    );
  }
}
// By passing store to store attribute, it will ensure  that all components under Main component will have access to Redux Store
ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById("container")
);
