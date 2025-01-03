import Calendar from "@/components/Calendar"
import Carousel from "@/components/Carousel"

const HomePage = () => {

  return (
    <div className="text-center bg-[#EFE3C2] min-h-screen">
      
      <Carousel />
      <div className="p-4">
        <h1 className="text-4xl font-semibold font-mono text-[#194175] mb-6">Hello!! Welcome to the Mental Wellness Journal</h1>
        <h3 className="text-xl text-[#123524] font-mono italic mt-6">
          A place to reflect, track your moods, and find peace.
        </h3>
      </div>

      <div>
        <Calendar />
      </div>

    </div>
  )
}

export default HomePage