import { useState } from 'react'
import { TextField, Button, Chip, Box } from '@mui/material';

const moods = ["Grateful", "Stressful", "Anxious", "Angry", "Energetic"];

const JournalEntry = () => {
    
    const [moodTag, setMoodTag] = useState([]);
    const [entry, setEntry] = useState('');

    const handleClick = (mood) => {
        if (moodTag.includes(mood)) {
            setMoodTag(moodTag.filter((tag) => tag !== mood))
        }else{
            setMoodTag([...moodTag, mood])
        }
        console.log(mood)
    }

    const onSubmit = () => {

        const oldEntries = JSON.parse(localStorage.getItem('journalEntries')) || []
        const newEntry = {
            id: Date.now(),
            content: entry,
            tags: moodTag,
            date: new Date().toString(),
        }
        console.log("The entry us",entry)
        console.log(newEntry)

        localStorage.setItem('journalEntries', JSON.stringify([ ...oldEntries,newEntry]))

        setEntry('');
        setMoodTag([])
        alert("Entry is saveddd!!!")
    }

  return (
    <div>
        <Box className="p-4 bg-white flex flex-col items-center rounded shadow-md">
            <TextField
                label="Your Thoughts"
                multiline 
                rows={6}
                variant='outlined'
                fullWidth
                placeholder="You can write here"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />
            <Box className="m-7 space-x-5 flex justify-between">
                {moods.map((mood) => (
                    <Chip key={mood} label={mood} onClick={() => handleClick(mood)} className="mr-5 mb-4 cursor-pointer" color={moodTag.includes(mood) ? 'primary' : 'default'} />
                ))}
            </Box>
            <Button variant="contained" color='success' size='large'  className='mt-4' onClick={onSubmit}>Save Entry</Button>
        </Box>
    </div>
  )
}

export default JournalEntry 