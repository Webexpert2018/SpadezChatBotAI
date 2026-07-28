import { HeadphonesIcon, MonitorSmartphone, TrendingUp } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Solutions for <span>Every Team</span></h1>
        <p>Discover how Acme Corp can be tailored to solve your specific challenges.</p>
      </div>

      <div className="solutions-layout">
        <div className="solution-row">
          <div className="solution-content">
            <div className="solution-icon"><HeadphonesIcon size={32} /></div>
            <h2>Customer Support</h2>
            <p>Deflect up to 70% of routine support tickets. Let the AI handle the repetitive questions so your human agents can focus on complex, high-value interactions.</p>
            <ul>
              <li>Instant responses 24/7</li>
              <li>Multi-language support</li>
              <li>Seamless human handoff</li>
            </ul>
          </div>
          <div className="solution-image placeholder-image">Support Dashboard Visualization</div>
        </div>

        <div className="solution-row reverse">
          <div className="solution-content">
            <div className="solution-icon"><MonitorSmartphone size={32} /></div>
            <h2>Internal IT Helpdesk</h2>
            <p>Empower your employees to self-serve. The AI can guide them through VPN setups, password resets, and software installations by instantly pulling from your internal wikis.</p>
            <ul>
              <li>Slack & Teams integration</li>
              <li>Reduce average resolution time</li>
              <li>Secure employee authentication</li>
            </ul>
          </div>
          <div className="solution-image placeholder-image">IT Flow Visualization</div>
        </div>
        
        <div className="solution-row">
          <div className="solution-content">
            <div className="solution-icon"><TrendingUp size={32} /></div>
            <h2>Sales Enablement</h2>
            <p>Equip your sales team with an instant oracle. They can ask complex pricing or competitor comparison questions during live calls and get immediate, accurate answers.</p>
            <ul>
              <li>CRM integration</li>
              <li>Battlecard generation</li>
              <li>Objection handling</li>
            </ul>
          </div>
          <div className="solution-image placeholder-image">Sales Metrics Visualization</div>
        </div>
      </div>
    </div>
  );
}
