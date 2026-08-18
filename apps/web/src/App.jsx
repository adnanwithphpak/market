import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Toaster } from './components/ui/toaster.jsx';
import HomePage from './pages/HomePage.jsx';
import BuyGuestPostsPage from './pages/BuyGuestPostsPage.jsx';
import BloggerOutreachPage from './pages/BloggerOutreachPage.jsx';
import LinkInsertionPage from './pages/LinkInsertionPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import SubmitGuestPostPage from './pages/SubmitGuestPostPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import SeoLandingPage from './pages/SeoLandingPage.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

function App() {
  const basename = window.location.hostname === 'localhost' &&
    window.location.pathname.startsWith('/market')
    ? '/market'
    : '/';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-guest-posts" element={<BuyGuestPostsPage />} />
        <Route path="/blogger-outreach" element={<BloggerOutreachPage />} />
        <Route path="/link-insertion" element={<LinkInsertionPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/submit-guest-post" element={<SubmitGuestPostPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy-policy" element={<PolicyPage policy="privacy-policy" />} />
        <Route path="/terms-of-services" element={<PolicyPage policy="terms-of-services" />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/:slug" element={<SeoLandingPage />} />
      </Routes>
      <WhatsAppButton />
      <Toaster />
    </Router>
  );
}

export default App;
