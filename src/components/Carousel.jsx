// import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
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
          maxWidth: '100vw',
        //   border: '1px solid #ddd', // Optional, for styling
          boxSizing: 'border-box'
        },
        arrowButton: {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
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
        caption: {
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          color: 'white',
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '5px 10px',
          borderRadius: '5px',
        },
      };

  return (
    <div className='pt-10'>
    <Box sx={styles.carouselWrapper}>
      <IconButton sx={styles.arrowButton} onClick={handlePrev}>
        <ArrowBack />
      </IconButton>
      
      <Box sx={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`carousel-image-${currentIndex}`}
          style={styles.image}
        />
        <Typography sx={styles.caption}>
          {`Image ${currentIndex + 1}`} {/* You can add more details or dynamic captions here */}
        </Typography>
      </Box>
      
      <IconButton sx={styles.arrowButton} onClick={handleNext}>
        <ArrowForward />
      </IconButton>
    </Box>
    </div>
  )
}

export default Carousel