import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { SearchBarWrapper } from './SearchBar.styled';
import { SearchForm } from './SearchBar.styled';
import { SearchFormButton } from './SearchBar.styled';

import { SearchFormInput } from './SearchBar.styled';





export const SearchBar = ({onSubmit}) => {
    const [searchQuery, setsearchQuery] = useState('');
    
    const handleChange = (event) => {
        setsearchQuery(event.target.value.toLowerCase())
       
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchQuery.trim() === '') {
            toast.warning("Please enter search query") 
            return;   
        }
        onSubmit(searchQuery);
        setsearchQuery('');
    }
   return (
    <>
<SearchBarWrapper>
    <SearchForm onSubmit={handleSubmit}>
    <SearchFormButton type="submit"><ImSearch/></SearchFormButton>
    <SearchFormInput 
    type="text" 
    autoComplete="off"
    autoFocus
    disabled={false}
    placeholder="Search images..." 
    name="searchQuery"
    value={searchQuery} 
    onChange={handleChange}/>
    </SearchForm>
    

</SearchBarWrapper>
<ToastContainer
   theme="colored"/>
    </>
   ); 

   
};


SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
