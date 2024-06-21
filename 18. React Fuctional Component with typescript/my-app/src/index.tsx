import React from "react";
import ReactDOM from "react-dom";
import UserSearch from "./refs/UserSearch";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
