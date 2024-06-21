import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

/*
interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}
 */

/*
N O T E: 

interface AppState {
  counter: number;
}

<AppProps, AppState> use AppState in case of constructor

constructor(props: AppProps) {
  super(props);
  this.state = { counter: 0 };
}
*/

/*
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };
*/
