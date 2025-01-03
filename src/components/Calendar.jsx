// import React, { useState, useEffect } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField, Card, CardContent, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// // Mood icons (same as in MoodTracker)
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
} from '@mui/icons-material';

const allMoodOptions = [
  { name: 'Very Happy', icon: <SentimentVerySatisfied fontSize="large" color="success" />, value: 1 },
  { name: 'Happy', icon: <SentimentSatisfiedAlt fontSize="large" color="primary" />, value: 2 },
  { name: 'Neutral', icon: <SentimentSatisfied fontSize="large" color="secondary" />, value: 3 },
  { name: 'Sad', icon: <SentimentDissatisfied fontSize="large" color="warning" />, value: 4 },
  { name: 'Very Sad', icon: <SentimentVeryDissatisfied fontSize="large" color="error" />, value: 5 },
];


const Calendar = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} inputFormat="MM/dd/yyyy">
        <DesktopDatePicker label="Select Date" />
      </LocalizationProvider>

      <Card>
        <CardContent>
          <Typography>Hello</Typography>
          <Typography>Hello</Typography>
        </CardContent>
      </Card>
      Hello
    </div>
  )
}

export default Calendar