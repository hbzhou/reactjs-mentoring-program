import React, { useRef, KeyboardEvent } from "react";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnclick = () => {
    console.log(inputRef.current?.value);
  };
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(inputRef.current?.value);
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type='text'
        name='keyword'
        onKeyDown={handleOnKeyDown}
        placeholder='What do you want to watch?'
        className='border border-solid rounded-sm bg-gray-700 h-12 w-80 px-3 py-2 focus-within: outline-none border-blue-700 text-white'
      />
      <button className=' bg-rose-400 rounded-sm h-12 w-32 text-white ml-2' onClick={handleOnclick}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
