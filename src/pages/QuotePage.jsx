import Quotes from '@/components/Quotes'


const QuotePage = () => {
  return (
    <div className='bg-[#EFE3C2] min-h-screen font-mono  p-8'>
        <h1 className='text-4xl font-bold italic text-center'>Daily Inspirational Quotes Page</h1>
        <h1 className='text-xl font-semibold text-center'>Click on the below button to get an inspirational Quote</h1>
        <Quotes />
    </div>
  )
}

export default QuotePage