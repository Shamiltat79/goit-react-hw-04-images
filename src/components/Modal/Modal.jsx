import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";


const Overlay = styled.div`
     position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`
const StyledModal = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
`


export const Modal = ({closeModal, largeImage}) => {
    

    const handleESC = (event) => {
        if (event.code === 'Escape') {
            closeModal();
        }
    }

   const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
        closeModal();
    }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleESC)

        return () =>  window.removeEventListener('keydown', handleESC)
    }
)
    
    
        return(
            <Overlay  onClick={handleBackdropClick}> <StyledModal><img src={largeImage} alt="" /></StyledModal></Overlay>
                 
                    
                  
                 )
    }


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
}