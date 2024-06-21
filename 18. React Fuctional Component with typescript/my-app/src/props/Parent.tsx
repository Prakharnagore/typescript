import { Child } from "./Child";

const Parent = () => {
  return <Child color="red" onClick={() => null}></Child>;
};

export default Parent;
