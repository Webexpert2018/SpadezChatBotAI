import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Database, Sparkles, RefreshCcw, X, MessageSquareText, Mic } from 'lucide-react';

const rawBase = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:3001' : 'https://spadez-chatbot-api.vercel.app');
const API_BASE = rawBase.replace(/\/+$/, '');
const API_URL = API_BASE.endsWith('/api') ? `${API_BASE}/chat` : `${API_BASE}/api/chat`;



export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [tenant, setTenant] = useState('acme'); // 'acme' or 'pf'
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! Ask me anything about Flexisure products, pricing, or support.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatMessagesRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Initialize Web Speech API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        setInput(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else if (recognitionRef.current) {
      setInput(''); // Clear input before speaking
      recognitionRef.current.start();
      setIsListening(true);
    } else {
      alert("Voice recognition is not supported in this browser.");
    }
  };

  useEffect(() => {
    if (isOpen && chatMessagesRef.current) {
      chatMessagesRef.current.scrollTo({
        top: chatMessagesRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading, isOpen]);

  async function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, tenant }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Request failed');
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.answer,
          sources: data.sources,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, something went wrong: ${err.message}`,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        className={`chat-fab ${isOpen ? 'chat-fab--hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <div className="chat-fab-tooltip">Chat with us</div>
        <MessageSquareText size={24} />
      </button>

      {/* Chat Window */}
      <div className={`chat-widget ${isOpen ? 'chat-widget--open' : ''}`}>
        <div className="chat">
          <div className="chat-header">
            <div className="chat-header-top">
              <div className="chat-header-info">
                <div className="chat-header-icon">
                  {tenant === 'acme' ? <Sparkles size={18} /> : <Database size={18} />}
                </div>
                <div>
                  <h3>{tenant === 'acme' ? 'Flexisure Assistant' : 'Finance AI'}</h3>
                  <span className="online-status">
                    <span className="status-dot"></span> Online
                  </span>
                </div>
              </div>
              <div className="chat-header-actions">
                <button className="chat-header-btn" onClick={() => setMessages([{ role: 'assistant', content: tenant === 'acme' ? 'Hi! Ask me anything about Flexisure products, pricing, or support.' : 'Hello! Ask me any questions about your Premium Finance data.' }])} aria-label="Reset chat" title="Reset Chat">
                  <RefreshCcw size={16} />
                </button>
                <button className="chat-header-btn" onClick={() => setIsOpen(false)} aria-label="Close chat" title="Close Chat">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="chat-tenant-toggle">
              <button 
                className={`tenant-btn ${tenant === 'acme' ? 'tenant-btn--active' : ''}`}
                onClick={() => { setTenant('acme'); setMessages([{ role: 'assistant', content: 'Hi! Ask me anything about Flexisure products, pricing, or support.' }]); }}
              >
                Flexisure Docs
              </button>
              <button 
                className={`tenant-btn ${tenant === 'pf' ? 'tenant-btn--active' : ''}`}
                onClick={() => { setTenant('pf'); setMessages([{ role: 'assistant', content: 'Hello! Ask me any questions about your Premium Finance data.' }]); }}
              >
                Premium Finance
              </button>
            </div>
          </div>
          <div className="chat-messages" ref={chatMessagesRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`message-wrapper message-wrapper--${msg.role}${msg.isError ? ' message-wrapper--error' : ''}`}>
                <div className={`avatar avatar--${msg.role}`}>
                  {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
                </div>
                <div className="message">
                  <div className="message-bubble">{msg.content}</div>
                  {msg.sources?.length > 0 && (
                    <details className="message-sources">
                      <summary>
                        <Database size={14} />
                        {msg.sources.length} source(s)
                      </summary>
                      <ul>
                        {msg.sources.map((src, j) => (
                          <li key={j}>
                            {src.source && <strong>{src.source}: </strong>}
                            {src.text}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="message-wrapper message-wrapper--assistant">
                <div className="avatar avatar--assistant">
                  <Bot size={20} />
                </div>
                <div className="message">
                  <div className="message-bubble">
                    <div className="typing-indicator">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                disabled={loading}
                autoFocus={isOpen}
              />
              <button 
                type="button" 
                className={`mic-button ${isListening ? 'listening' : ''}`}
                onClick={toggleListening}
                title="Use Voice Command"
                aria-label="Use Voice Command"
              >
                <Mic size={18} />
              </button>
            </div>
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
