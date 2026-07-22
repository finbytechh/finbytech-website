import { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import './AIChatWidget.css';

function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Services",
    "Intense Dating",
    "Contact Info",
    "AI Trading Platform"
  ];

  const getResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('service') || msg.includes('offer') || msg.includes('provide')) {
      return 'We offer Digital Marketing, Web Development, Mobile App Development, API Bridge Trading Software, Educational Courses, and our flagship AI Trading Platform. Visit our Services section for more details!';
    }
    if (msg.includes('intense dating') || msg.includes('dating app')) {
      return 'Intense Dating is our premium dating app with features like Private Chat, Video Calling, Voice Calling, Verified Profiles, and AI Matchmaking. Download it from Play Store or visit intensedating.in. WhatsApp support: +91 95153 63772';
    }
    if (msg.includes('ai trading') || msg.includes('1click') || msg.includes('oneclick') || msg.includes('trade') || msg.includes('algo')) {
      return 'Our AI Trading Platform is an advanced algorithmic trading solution that uses AI-powered strategies to automate your trades. It supports major brokers like Zerodha, Angel One, Upstox and offers one-click deployment, backtesting, paper trading, and real-time risk management. Contact us for a demo!';
    }
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('reach')) {
      return 'You can reach us at: Email: info@finbytech.com, Phone: +91 96511 18519, Website: finbytech.com. Our team is available Monday-Saturday, 10am-7pm IST.';
    }
    if (msg.includes('price') || msg.includes('cost') || msg.includes('pricing')) {
      return 'We have flexible pricing plans: Starter (INR 12,999/30 days), Quarterly (INR 33,999/90 days), and Premium (INR 64,999/180 days). Visit Pricing page for detailed features!';
    }
    if (msg.includes('refund') || msg.includes('cancel')) {
      return 'All subscription fees are non-refundable as per our policy. We recommend taking our Expert Advice evaluation before subscribing. Check our Refund Policy page for complete details.';
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! Welcome to Finbytechnovation IT Solutions. How can I assist you today? Feel free to ask about our services, Intense Dating app, or AI Trading Platform!';
    }
    if (msg.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with? We're here to assist you 24/7.";
    }
    return "Thanks for your message! Our team specializes in IT Solutions, Trading Platforms, and Consumer Apps. For specific queries, contact us at info@finbytech.com or call +91 96511 18519.";
  };

  const sendMessage = (text = input) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: text.trim() }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: getResponse(text) }]);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="ai-chat-widget">
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="ai-avatar">
              <Bot size={24} />
            </div>
            <div className="ai-info">
              <h4>Finbytech AI Assistant</h4>
              <span>Online | Ask me anything!</span>
            </div>
            <button className="ai-close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="ai-chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`ai-message ${msg.type}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="ai-message bot">
                <div className="ai-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
          <div className="ai-quick-buttons">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)}>{q}</button>
            ))}
          </div>
          <div className="ai-chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={() => sendMessage()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      <button
        className={`ai-chat-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </button>
    </div>
  );
}

export default AIChatWidget;
