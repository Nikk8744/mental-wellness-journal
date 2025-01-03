import Calendar from "@/components/Calendar"
import Carousel from "@/components/Carousel"

const HomePage = () => {

  return (
    <div className="text-center bg-[#EFE3C2] min-h-screen flex flex-col">
      
      {/* Carousel */}
      <div className="w-full">
        <Carousel />
      </div>

      {/* Welcome Message */}
      <div className="p-4 sm:p-6 md:p-8">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-semibold font-mono text-[#194175] mb-6">
          Hello!! Welcome to the Mental Wellness Journal
        </h1>
        <h3 className="text-xl sm:text-lg md:text-xl text-[#123524] font-mono italic mt-6">
          A place to reflect, track your moods, and find peace.
        </h3>
      </div>

      {/* Calendar */}
      <div className="p-8 sm:p-4 md:p-8 flex justify-center">
        <div className="w-full max-w-4xl">
          <Calendar />
        </div>
      </div>

    </div>
  )
}

export default HomePage;
