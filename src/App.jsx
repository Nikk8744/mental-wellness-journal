import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Layout from "./components/Layout"
import JournalPage from './pages/JournalPage'
import MoodPage from './pages/MoodPage'
import QuotePage from './pages/QuotePage'


const App = () => {
  return (
    <div className='bg-[#EFE3C2]'>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/journal" element={<JournalPage />}/>
            <Route path="/mood" element={<MoodPage />}/>
            <Route path="/quotes" element={<QuotePage />}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App