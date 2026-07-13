import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import OneClick from './pages/OneClick';
import IntenseDating from './pages/IntenseDating';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Disclaimer from './pages/Disclaimer';
import Cancellation from './pages/Cancellation';
import Shipping from './pages/Shipping';
import Grievance from './pages/Grievance';
import Cookies from './pages/Cookies';
import Blog from './pages/Blog';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AIChatWidget from './components/AIChatWidget';
import LeadPopup from './components/LeadPopup';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/oneclick" element={<OneClick />} />
          <Route path="/intense-dating" element={<IntenseDating />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
      <FloatingWhatsApp />
      <AIChatWidget />
      <LeadPopup />
    </>
  );
}

export default App;
