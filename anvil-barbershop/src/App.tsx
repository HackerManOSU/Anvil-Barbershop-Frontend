import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementModal from './Components/AnnouncementModal';
import Header from './Components/Header/Header'
import HomePage from './Components/Home'
import HoursPage from './Components/Hours/Hours'
import ServicesPage from './Components/Services/Services'
import FAQPage from './Components/FAQ/FAQPage'
import Footer from './Components/Footer/Footer'
import { siteAnnouncement } from './config/announcement';
import './App.css'

function App() {
  const storageKey = useMemo(
    () => `anvil-announcement-dismissed:${siteAnnouncement.id}`,
    [],
  );
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    if (!siteAnnouncement.enabled) {
      return;
    }

    const isDismissed = window.localStorage.getItem(storageKey) === 'true';

    if (!isDismissed) {
      setShowAnnouncement(true);
    }
  }, [storageKey]);

  const closeAnnouncement = () => {
    setShowAnnouncement(false);
    window.localStorage.setItem(storageKey, 'true');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {showAnnouncement && (
          <AnnouncementModal
            title={siteAnnouncement.title}
            message={siteAnnouncement.message}
            dismissButtonText={siteAnnouncement.dismissButtonText}
            onClose={closeAnnouncement}
          />
        )}
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
