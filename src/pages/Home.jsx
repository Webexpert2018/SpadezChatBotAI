import { Umbrella, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            Premium Financing Company
          </div>
          
          <h1>Insurance On <br /><span>Your Terms</span></h1>
          
          <p>
            FLEXISURE offers you convenient ways to pay your insurance premiums.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">
              <Lock size={16} /> Log In
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            {/* The image will be placed here */}
            <img src="/hero.png" alt="Happy family in a car" />
          </div>
        </div>
      </section>

      <section className="radar-section">
        <div className="radar-badge">What Flexisure</div>
        
        <div className="radar-container">
          <div className="radar-circle radar-circle-1"></div>
          <div className="radar-circle radar-circle-2"></div>
          <div className="radar-circle radar-circle-3"></div>
          
          <div className="radar-dot dot-red"></div>
          <div className="radar-dot dot-blue"></div>
          <div className="radar-dot dot-green"></div>
          
          <Umbrella size={64} className="umbrella-icon" strokeWidth={2.5} />
        </div>

        <h2>Flexisure is a premium financing company.</h2>
        <p>
          Our purpose is to revolutionize the insurance landscape across the region by providing innovative and accessible premium financing solutions.
        </p>

        <button className="btn-outline">Find Out More</button>
      </section>

      <section className="solutions-section">
        <h2>Flexible & Innovative <br />Premium Financing Solutions</h2>
        
        <div className="solutions-grid">
          <div className="solution-card">
            <h3>No Large Upfront Payments</h3>
            <p>Spread the cost of your insurance over manageable monthly payments instead of paying a lump sum upfront.</p>
          </div>
          <div className="solution-card">
            <h3>Affordable Monthly Installments</h3>
            <p>Budget-friendly options that work for you.</p>
          </div>
          <div className="solution-card">
            <h3>Simple & Fast Application</h3>
            <p>Easy online process with minimal paperwork.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
