// import React from 'react'
import { Box, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { useState } from 'react';
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'

const images = [img1, img2, img3];
const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
      
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const styles = {
        carouselWrapper: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          height: 'auto',
          overflow: 'hidden',
          // border: '10px solid #ddd', // Optional, for styling
          boxSizing: 'border-box'
        },
        carouselContainer: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          maxWidth:  { xs: '100vw', sm: '90vw', md: '70vw' }, // Optional: you can control the width
          width: '100%',
        },
        arrowButton: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          margin: "4px"
        },
        imageContainer: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          borderRadius: '5px',
        },
        image: {
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          maxHeight: '400px', // You can adjust this height based on your design requirements
          borderRadius: '15px',
        },
        // caption: {
        //   position: 'absolute',
        //   bottom: '10px',
        //   left: '10px',
        //   color: 'white',
        //   background: 'rgba(0, 0, 0, 0.5)',
        //   padding: '5px 10px',
        //   borderRadius: '5px',
        // },
      };

  return (
    <div className='pt-10'>
      <Box sx={styles.carouselWrapper}>
        <Box sx={styles.carouselContainer}>
          <IconButton sx={{...styles.arrowButton, left: {xs: "10px", sm: "5px"}} } onClick={handlePrev}>
            <ArrowBack />
          </IconButton>
          
          <Box sx={styles.imageContainer}>
            <img
              src={images[currentIndex]}
              alt={`carousel-image-${currentIndex}`}
              style={styles.image}
            />
          </Box>
          
          <IconButton sx={{...styles.arrowButton, right: { xs: '10px', sm: '15px' }}} onClick={handleNext}>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </div>
  )
}

export default Carousel