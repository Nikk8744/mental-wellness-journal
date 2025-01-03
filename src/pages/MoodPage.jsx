import MoodTracker from "@/components/MoodTracker"

const MoodPage = () => {
  return (
    <div className="px-8 pt-8 bg-[#EFE3C2] font-mono min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">Mood Page</h1>
      <MoodTracker />
    </div>
  )
}

export default MoodPage