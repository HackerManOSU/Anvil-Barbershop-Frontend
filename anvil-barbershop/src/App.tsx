import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import HomePage from './Components/Home'
import HoursPage from './Components/Hours/Hours'
import PricesPage from './Components/Pricing/Prices'
import FAQPage from './Components/FAQ/FAQPage'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {

  return (
    <Router>
      <div>
      <Header />
        
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hours" element={<HoursPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
