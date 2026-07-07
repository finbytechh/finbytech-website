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
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AIChatWidget from './components/AIChatWidget';

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
        </Routes>
      </Layout>
      <FloatingWhatsApp />
      <AIChatWidget />
    </>
  );
}

export default App;
