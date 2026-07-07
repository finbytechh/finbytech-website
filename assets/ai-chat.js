(function() {
    document.write(`
<div class="ai-chat-widget">
    <button class="ai-chat-btn" onclick="toggleChat()">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.67.42 3.24 1.14 4.62L2 22l5.38-1.14C8.76 21.58 10.33 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
    </button>
    <div class="ai-chat-window" id="aiChatWindow">
        <div class="ai-chat-header">
            <svg style="width:40px;height:40px;fill:white;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#667eea"/></svg>
            <div class="ai-chat-header-info">
                <h4>Finbytech AI Assistant</h4>
                <span>Online | Ask me anything!</span>
            </div>
            <button class="ai-chat-close" onclick="toggleChat()">&times;</button>
        </div>
        <div class="ai-chat-messages" id="aiChatMessages">
            <div class="ai-chat-message bot">
                <p>Hello! I'm your AI assistant. How can I help you today?</p>
            </div>
        </div>
        <div class="ai-chat-quick">
            <button onclick="askQuestion('What services do you offer?')">Services</button>
            <button onclick="askQuestion('Tell me about Intense Dating')">Intense Dating</button>
            <button onclick="askQuestion('How can I contact you?')">Contact Info</button>
            <button onclick="askQuestion('What is 1Click Platform?')">1Click Platform</button>
        </div>
        <div class="ai-chat-input">
            <input type="text" id="aiChatInput" placeholder="Type your message..." onkeypress="handleKeyPress(event)">
            <button onclick="sendMessage()">
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
        </div>
    </div>
</div>
`);
})();

function toggleChat() {
    document.getElementById('aiChatWindow').classList.toggle('active');
}

function handleKeyPress(e) {
    if (e.key === 'Enter') sendMessage();
}

function askQuestion(q) {
    document.getElementById('aiChatInput').value = q;
    sendMessage();
}

function sendMessage() {
    const input = document.getElementById('aiChatInput');
    const message = input.value.trim();
    if (!message) return;

    const messagesDiv = document.getElementById('aiChatMessages');
    messagesDiv.innerHTML += '<div class="ai-chat-message user"><p>' + escapeHtml(message) + '</p></div>';
    input.value = '';

    messagesDiv.innerHTML += '<div class="ai-chat-message bot"><div class="ai-typing"><span></span><span></span><span></span></div></div>';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    setTimeout(function() {
        const typing = document.querySelector('.ai-typing');
        if (typing) typing.parentElement.innerHTML = '<p>' + getResponse(message) + '</p>';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000 + Math.random() * 500);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getResponse(msg) {
    const m = msg.toLowerCase();
    if (m.includes('service') || m.includes('offer') || m.includes('provide')) {
        return 'We offer Digital Marketing, Web Development, Mobile App Development, API Bridge Trading Software, Educational Courses, and our flagship 1Click Trade Manager platform. Visit our Services section for more details!';
    }
    if (m.includes('intense dating') || m.includes('dating app')) {
        return 'Intense Dating is our premium dating app with features like Private Chat, Video Calling, Voice Calling, Verified Profiles, and AI Matchmaking. Download it from Play Store or visit intensedating.in. WhatsApp support: +91 95153 63772';
    }
    if (m.includes('1click') || m.includes('oneclick') || m.includes('trade')) {
        return '1Click Platform is our automated trading solution that connects your demat account via API Bridge. It supports major brokers and offers fully automated trading with pre-loaded strategies. Contact us for a demo!';
    }
    if (m.includes('contact') || m.includes('phone') || m.includes('email') || m.includes('reach')) {
        return 'You can reach us at: Email: care@finbytechnovation.in, WhatsApp: +91 95153 63772, Website: finbytech.com. Our team is available Monday-Saturday, 10am-7pm IST.';
    }
    if (m.includes('price') || m.includes('cost') || m.includes('pricing')) {
        return 'We have flexible pricing plans: Starter (INR 12,999/30 days), Quarterly (INR 33,999/90 days), and Premium (INR 64,999/180 days). Visit Pricing page for detailed features!';
    }
    if (m.includes('refund') || m.includes('cancel')) {
        return 'All subscription fees are non-refundable as per our policy. We recommend taking our Expert Advice evaluation before subscribing. Check our Refund Policy page for complete details.';
    }
    if (m.includes('hello') || m.includes('hi') || m.includes('hey')) {
        return 'Hello! Welcome to Finbytechnovation IT Solutions. How can I assist you today? Feel free to ask about our services, Intense Dating app, or 1Click Platform!';
    }
    if (m.includes('thank')) {
        return 'You\'re welcome! Is there anything else I can help you with? We\'re here to assist you 24/7.';
    }
    return 'Thanks for your message! Our team specializes in IT Solutions, API Trading Platforms, and Dating Apps (Intense Dating). For specific queries, please contact us at care@finbytechnovation.in or WhatsApp +91 95153 63772.';
}
