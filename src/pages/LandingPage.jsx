import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/LandingPage.css';

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className={`landing-content ${isVisible ? 'fade-in' : ''}`}>
        {/* Hero Section */}
        <div className="hero-icon"></div>
        
        <h1 className="hero-title">
          Powerful tools for everything<br />
          <span style={{ background: 'linear-gradient(45deg, #ffd700, #ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            schedule related
          </span>
        </h1>

        <p className="hero-subtitle">
          Become a superhuman with powerful tools at{' '}
          <span style={{ color: '#ffd700', fontWeight: '700' }}>studyflow.dev</span>
          <br />
          Plan, optimize, share, and export your perfect schedule.
        </p>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📅</span>
            <h3 className="feature-title">Smart Planning</h3>
            <p className="feature-desc">AI-powered semester scheduling</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-desc">Instant schedule optimization</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3 className="feature-title">Social Sharing</h3>
            <p className="feature-desc">Share with friends seamlessly</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">📁</span>
            <h3 className="feature-title">Export Anywhere</h3>
            <p className="feature-desc">iCal, PDF, and more formats</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Link to="/login" className="btn-primary">
            👤 Your Schedule
          </Link>
          <Link to="/register" className="btn-secondary">
            ➕ Build Schedule
          </Link>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Universities</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>

        <p className="footer-text">
          🚀 Built with ❤️ for students worldwide
        </p>
      </div>
    </div>
  );
}

export default LandingPage;