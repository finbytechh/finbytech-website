import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './FloatingWhatsApp.css';

function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="whatsapp-widget">
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="whatsapp-header">
            <div className="agent-avatar">
              <MessageCircle size={24} />
            </div>
            <div className="agent-info">
              <h4>Support Team</h4>
              <span>Typically replies within an hour</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="whatsapp-body">
            <div className="message">
              <p>Hi there! How can I help you today?</p>
            </div>
          </div>
          <a
            href="https://wa.me/919515363772"
            target="_blank"
            rel="noopener noreferrer"
            className="start-chat-btn"
          >
            <MessageCircle size={18} /> Start Chat
          </a>
        </div>
      )}
      <button
        className={`whatsapp-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}

export default FloatingWhatsApp;
