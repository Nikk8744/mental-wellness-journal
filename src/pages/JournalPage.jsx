
// import MoodTracker from '../components/MoodTracker';
import JournalEntry from '@/components/JournalEntry';

const JournalPage = () => {

    // const [mood, setMood] = useState(null)

    // const handleMoodChange = (newMethod) => {
    //     setMood(newMethod)
    // }
  
  return (
    <div className=' bg-[#EFE3C2] min-h-'>
        <h1 className='text-3xl font-mono font-bold text-center p-6'>Journal Your Thoughts</h1>
        <JournalEntry />
    </div>
  )
}
export default JournalPage