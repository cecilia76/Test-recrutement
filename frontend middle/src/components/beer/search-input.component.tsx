import React, { useState } from 'react';

interface IProps {
  onSearch: (arg: string) => void,
  searchText: string,
}

const SearchInput:React.FC <IProps> = ({ searchText, onSearch }) => {
  const [inputText, setInputText] = useState<string>(searchText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  return (
    <div className='form-search'>
      <input placeholder='Search Text' className='input-field' value={inputText} onChange={handleChange}/>
      <button className='form-search-btn' onClick={() => onSearch(inputText)} disabled={!inputText}>Search</button>
      <button className='form-clear-btn' onClick={() => onSearch('')} disabled={!inputText}>Clear</button>
    </div>
  );
}

export default SearchInput;