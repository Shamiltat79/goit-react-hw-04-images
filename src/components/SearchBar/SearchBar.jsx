import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import css from 'components/SearchBar/SearchBar.module.css';
import { ImSearch } from 'react-icons/im';
// import PropTypes from 'prop-types';

import { SearchBarWrapper } from './SearchBar.styled';
import { SearchForm } from './SearchBar.styled';
import { SearchFormButton } from './SearchBar.styled';
// import { SearchFormButtonLabel } from './SearchBar.styled';
import { SearchFormInput } from './SearchBar.styled';





export default function SearchBar({onSubmit}) {

    const [searchQuery, setsearchQuery] = useState('');
    
    const handleChange = (event) => {
        setsearchQuery(event.target.value.toLowercase())
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchQuery.trim() === '') {
            toast.warning("Please enter search query") 
            return;   
        }
        onSubmit({searchQuery});
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

   
}




// export class SearchBar extends Component {
//     state = {
//     searchQuery: '',
   
//     };

//     handleChange = (event) => {
    
//       this.setState({ searchQuery: event.currentTarget.value.toLowerCase()});
      
//     };

//     handleSubmit = (event) => {
//       event.preventDefault();
      
//       if (this.state.searchQuery.trim() === '') {
// toast.warning("Please enter search query")
//         return;
//       }
//     this.props.onSubmit(this.state.searchQuery);
//       this.setState({ searchQuery: '' });    
//   };
  

//     render() {
//         const { searchQuery} = this.state;
//         // console.log(searchQuery); 
//         return (
//             <header className={css.Searchbar}>
//             <form className={css.SearchForm} onSubmit={this.handleSubmit}>

//             <button type="submit" className={css.SearchFormButton}>
//                 <ImSearch/>
         
//         </button>     
      
//         <input className={css.SearchFormInput}
//           type="text"
//           placeholder="Search images..."
//           value={searchQuery}
//           onChange={this.handleChange}
//         />

        
//             </form> 
//             <ToastContainer
//             theme="colored"/>
//             </header>
//         );
//   }
   
 
// }


// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }
