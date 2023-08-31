import React from "react";
import Counter from "./component/Counter";

const App = () => {
  const initial = 10;
  return (
    <>
      <div className='text-xl'>Welcome to ReactJS Mentoring Program !</div>;
      <Counter initial={initial} />
    </>
  );
};

export default App;
