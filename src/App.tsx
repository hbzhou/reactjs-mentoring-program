import React from "react";
import Counter from "./component/Counter";
import SearchBar from "./component/searchBar/SearchBar";

const App = () => {
  const initial = 10;
  return (
    <>
      <div className='text-xl'>Welcome to ReactJS Mentoring Program !</div>;
      <Counter initial={initial} />
      <br />
      <SearchBar />
    </>
  );
};

export default App;
