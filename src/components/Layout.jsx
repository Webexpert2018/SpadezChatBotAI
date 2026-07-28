import { Outlet, Link } from 'react-router-dom';
import { User, Box, Globe, Mail, Phone } from 'lucide-react';
import Chat from './Chat.jsx';

export default function Layout() {
  return (
    <div className="app-container">
      <div className="navbar-wrapper">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            FLEXI<span>SURE</span>
          </Link>

          <div className="navbar-actions">
            <button className="btn-icon" aria-label="User Account">
              <User size={18} />
            </button>
          </div>
        </nav>
      </div>

      <main className="main-content">
        <Outlet />
      </main>

      <Chat />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="navbar-brand">
              FLEXI<span>SURE</span>
            </Link>
            <p>Revolutionizing the insurance landscape across the region.</p>
            <div className="footer-socials">
              <a href="#"><Globe size={20}/></a>
              <a href="#"><Mail size={20}/></a>
              <a href="#"><Phone size={20}/></a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Company</h3>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/partner">Partner With Us</Link>
            </div>
            <div>
              <h3>Services</h3>
              <Link to="/services">Premium Financing</Link>
              <Link to="/insurance">Insurance Plans</Link>
              <Link to="/claims">File a Claim</Link>
              <Link to="/support">Support Center</Link>
            </div>
            <div>
              <h3>Legal</h3>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/compliance">Compliance</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Flexisure. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
