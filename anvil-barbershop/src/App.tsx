import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import HomePage from './Components/Home'
import HoursPage from './Components/Hours/Hours'
import ServicesPage from './Components/Services/Services'
import FAQPage from './Components/FAQ/FAQPage'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />

        <main id="main-content" className="flex-1 pt-[90px]" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hours" element={<HoursPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
