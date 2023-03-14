import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


import {SearchBar} from "./SearchBar/SearchBar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
import { fetchImage } from "API";

export const App = () => { 

const [searchQuery, setsearhQuery] = useState('');

const [page, setPage] = useState(1);

const [total, setTotal] = useState(null);
const [isLoader, setisLoader] = useState(false);
const [images, setimages] = useState([]);
const [largeImage, setLargeImage] = useState(null);
const [showModal, setshowModal] = useState(false);

const perPage = 12;

 useEffect(() => {
        if(searchQuery !== ''){
setisLoader(true)
console.log(searchQuery);

const getImages = async() =>  {
    
  try {
    const response  = await fetchImage(searchQuery, page, perPage);
    if(response.total === 0){
      toast.info('No images by your request')
    }
    
    setimages(prevState => [...prevState, ...response.hits]);
    console.log(response);
    setTotal(response.total);
   
    ; 
    
    
   
  } catch (error) {
    setimages([])
      toast.error('Uuups, no image by your request') 
  } finally {
    setisLoader(false)
  }
  
}     
getImages();
        }
      
  }, [searchQuery, page  ])


  const handleFormSubmit = (searh) => {
    setsearhQuery(searh);
    setPage(1);
    setimages([]);

  };

  const loadMoreButtonClick = () => {
    setPage(prevPage => prevPage + 1)
    console.log(page * perPage);
    console.log(total);
  };


  const toggleModal = () => {
setshowModal(prevState => !prevState)
  }


  function getModalImage(largeImageURL) {
    setLargeImage(largeImageURL);
    toggleModal();
    }
  




const closeModal = () => {
 setshowModal(false);
 
};
  
   
  return (
    <>
    <SearchBar onSubmit={handleFormSubmit}/>
    <ImageGallery>
    <ImageGalleryItem 
    images={images}
    onClick={getModalImage}
    
    ></ImageGalleryItem> 
     
     
       {isLoader && <Loader/>}   
    
    </ImageGallery>
   
     {showModal && <Modal closeModal={closeModal} largeImage={largeImage}/>}
    {page * perPage  >= total ? null : <Button handleClick={loadMoreButtonClick}/>}
    
        
    </>
      
    
  );

 
};
  