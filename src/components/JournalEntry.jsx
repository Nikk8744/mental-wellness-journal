import { useState } from 'react';
import { TextField, Button, Chip, Box } from '@mui/material';

const moods = ["Grateful", "Stressful", "Anxious", "Angry", "Energetic"];

const JournalEntry = () => {
  const [moodTag, setMoodTag] = useState([]);
  const [entry, setEntry] = useState('');

  const handleClick = (mood) => {
    if (moodTag.includes(mood)) {
      setMoodTag(moodTag.filter((tag) => tag !== mood));
    } else {
      setMoodTag([...moodTag, mood]);
    }
  };

  const onSubmit = () => {
    const oldEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const newEntry = {
      id: Date.now(),
      content: entry,
      tags: moodTag,
      date: new Date().toString(),
    };
    localStorage.setItem('journalEntries', JSON.stringify([ ...oldEntries, newEntry ]));
    
    setEntry('');
    setMoodTag([]);
    alert("Entry is saved!");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <Box className="bg-white flex flex-col items-center rounded shadow-md p-6 w-full max-w-xl mx-auto">
        <TextField
          label="Your Thoughts"
          multiline
          rows={6}
          variant='outlined'
          fullWidth
          placeholder="You can write here"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="mb-6"
        />
        <Box className="flex flex-wrap justify-center gap-4 pt-5 mb-6">
          {moods.map((mood) => (
            <Chip
              key={mood}
              label={mood}
              onClick={() => handleClick(mood)}
              className="cursor-pointer"
              color={moodTag.includes(mood) ? 'success' : 'primary'}
            />
          ))}
        </Box>
        <Button 
          variant="contained" 
          color="success" 
          size="large"  
          onClick={onSubmit} 
          fullWidth
        >
          Save Entry
        </Button>
      </Box>
    </div>
  );
};

export default JournalEntry;
