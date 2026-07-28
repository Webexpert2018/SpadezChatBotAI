import { Bot, BookOpen, BarChart3 } from 'lucide-react';

export default function Products() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our <span>Products</span></h1>
        <p>A suite of AI tools designed to transform how your company operates.</p>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <div className="product-icon"><Bot size={40} /></div>
          <h2>Acme AI Chat</h2>
          <p>Deploy a state-of-the-art conversational agent that knows everything about your business. Grounded in reality, zero hallucinations.</p>
          <button className="navbar-cta" style={{marginTop: '1rem'}}>Learn More</button>
        </div>
        
        <div className="product-card">
          <div className="product-icon"><BookOpen size={40} /></div>
          <h2>Acme Knowledge Base</h2>
          <p>A dynamic, self-organizing repository for all your company documents. It automatically tags and indexes your files for instant retrieval.</p>
          <button className="navbar-cta" style={{marginTop: '1rem'}}>Learn More</button>
        </div>

        <div className="product-card">
          <div className="product-icon"><BarChart3 size={40} /></div>
          <h2>Acme Analytics</h2>
          <p>Gain deep insights into what your customers and employees are asking. Identify knowledge gaps and improve your documentation.</p>
          <button className="navbar-cta" style={{marginTop: '1rem'}}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
