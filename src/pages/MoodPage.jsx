import MoodTracker from "@/components/MoodTracker"

const MoodPage = () => {
  return (
    <div className="p-8 bg-gray-700 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">Mood Page</h1>
      <MoodTracker />
    </div>
  )
}

export default MoodPage