import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const { data, error, loading } = useSelector((state) => state.repositories);
  const [term, setTerm] = useState("");

  const { searchRepositories } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={onChange} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((name) => {
          return <div>{name}</div>;
        })}
    </div>
  );
};

export default RepositoriesList;

// dispatch(actionCreators.searchRepositories(term) as any);
