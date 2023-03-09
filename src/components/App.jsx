import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from "./SearchBar/SearchBar";

export const App = () => { 

  const [searhQuery, setsearhQuery] = useState('')

  const handleFormSubmit = (searh) => {
    setsearhQuery(searh);
  }
  return (
    <>
    <SearchBar onSubmit={handleFormSubmit}/>
    </>
      
    
  );

 
};
