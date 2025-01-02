import Carousel from "@/components/Carousel"

const HomePage = () => {

  return (
    <div className="text-center">
      <div className="bg-slate-300 p-4">
        <h1 className="text-4xl font-semibold text-[#194175] mb-6">Hello!! Welcome to the Mental Wellness Journal</h1>
        <h3 className="text-xl text-[#1f2080] mt-6">
          A place to reflect, track your moods, and find peace.
        </h3>
      </div>
      <Carousel />

    </div>
  )
}

export default HomePage