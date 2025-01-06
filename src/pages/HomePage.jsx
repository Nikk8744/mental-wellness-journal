import Calendar from "@/components/Calendar"
import Card from "@/components/Card";
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

      <div className="flex flex-col items-center p-10">
        <h1 className="text-3xl text-center font-mono font-semibold">Mental Wellness Resource</h1>
        <div className="flex flex-wrap justify-center gap-6 p-5">
        <Card title="Understanding Mental Wellness" desc="Learn about the importance of mental health and daily self-care practices."/>
        <Card title="The Power of Journaling" desc="Discover how daily journaling can improve your mental well-being."/>
        <Card title="Building Positive Habits" desc="Simple steps to create and maintain healthy mental wellness habits."/>
        </div>
    
      </div>

      {/* Calendar */}
        <h1 className="text-3xl mt-4 font-mono text-[#123524] font-semibold">Your calendar & entries</h1>
      <div className="p-8 sm:p-4 md:p-8 flex justify-center">
        <div className="w-full max-w-4xl">
          <Calendar />
        </div>
      </div>

    </div>
  )
}

export default HomePage;
