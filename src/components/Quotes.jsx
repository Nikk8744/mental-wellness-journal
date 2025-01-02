// import React from 'react'
import { QuotesApi } from '@/utils/QuotesApi'
import { useEffect, useState } from 'react'
import { Box, Button, Typography, Modal, CircularProgress} from '@mui/material';

const Quotes = () => {

  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchQuote = async() => {
      const getQuote = await QuotesApi();
      setQuote(getQuote)
      setLoading(false)
    }
    fetchQuote();
  }, [])
  // console.log(quote)
  // console.log(quote.data)

  // mui modal component 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   
  if (loading) {
    // Show a loading indicator while the quote is being fetched
    return (
      <div className='text-center m-7'>
        <CircularProgress /> {/* Circular Progress Spinner */}
        <Typography variant="h6" sx={{ mt: 2 }}>Loading...</Typography>
      </div>
    );
  }
  if (!quote) return null;
  return (
    <div className='text-center m-7'>
      <Button onClick={handleOpen} variant="contained" color="primary">Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Todays Quote
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {quote.quote}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {quote.author}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Quotes