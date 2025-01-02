
// import MoodTracker from '../components/MoodTracker';
import JournalEntry from '@/components/JournalEntry';

const JournalPage = () => {

    // const [mood, setMood] = useState(null)

    // const handleMoodChange = (newMethod) => {
    //     setMood(newMethod)
    // }
  
  return (
    <div className='p-8 bg-gray-100 min-h-screen w-screen'>
        <h1 className='text-2xl font-bold md-4'>Journal Your Thoughts</h1>
        <JournalEntry />
    </div>
  )
}

export default JournalPage