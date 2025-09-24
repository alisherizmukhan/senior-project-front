import React from 'react';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-container">
      {/* Background Elements */}
      <div className="home-background">
        <div className="bg-gradient"></div>
        <div className="floating-elements">
          <div className="floating-icon icon-1">📚</div>
          <div className="floating-icon icon-2">📊</div>
          <div className="floating-icon icon-3">🎯</div>
          <div className="floating-icon icon-4">⏰</div>
          <div className="floating-icon icon-5">✨</div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="home-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🧠</span>
            <span className="logo-text">Smart Academic Planner</span>
          </div>
          <nav className="nav-menu">
            <button 
              className="nav-btn"
              onClick={() => onNavigate('home')}
            >
              Home
            </button>
            <button 
              className="nav-btn"
              onClick={() => onNavigate('login')}
            >
              Login
            </button>
            <button 
              className="nav-btn nav-btn-primary"
              onClick={() => onNavigate('register')}
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Academic Planning
            <span className="gradient-text"> with AI Insights</span>
          </h1>
          <p className="hero-subtitle">
            Transform your university experience with intelligent syllabus parsing, 
            automated GPA tracking, and AI-powered academic insights. Never miss a 
            deadline or lose track of your goals again.
          </p>
          <div className="hero-buttons">
            <button 
              className="cta-button cta-primary"
              onClick={() => onNavigate('register')}
            >
              <span className="button-icon">🚀</span>
              Start Planning Now
            </button>
            <button className="cta-button cta-secondary">
              <span className="button-icon">▶️</span>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-tabs">
                <div className="tab active">Dashboard</div>
                <div className="tab">Calendar</div>
                <div className="tab">GPA Tracker</div>
              </div>
            </div>
            <div className="mockup-content">
              <div className="mockup-card">
                <h4>📊 Current GPA</h4>
                <div className="gpa-display">3.72</div>
              </div>
              <div className="mockup-card">
                <h4>📅 Upcoming</h4>
                <div className="upcoming-item">Math Quiz - Tomorrow</div>
                <div className="upcoming-item">Physics Lab - Friday</div>
              </div>
              <div className="mockup-card">
                <h4>🎯 Goals</h4>
                <div className="goal-item">Target GPA: 3.8</div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-content">
          <h2 className="section-title">Powerful Features for Smart Students</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">AI Syllabus Parsing</h3>
              <p className="feature-description">
                Upload your syllabi and let our AI extract deadlines, grading weights, 
                and exam dates automatically. No more manual tracking!
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Interactive GPA Calculator</h3>
              <p className="feature-description">
                Track your performance with dynamic GPA calculations and get personalized 
                recommendations to reach your academic goals.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3 className="feature-title">Smart Calendar Integration</h3>
              <p className="feature-description">
                Sync with Gmail and Google Calendar. Never miss an assignment or exam 
                with intelligent deadline management.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Grade Optimization</h3>
              <p className="feature-description">
                Get AI-powered suggestions on what grades you need to achieve your 
                target GPA and academic objectives.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Course Planning</h3>
              <p className="feature-description">
                Intelligent course recommendations based on your major, interests, 
                and peer pathways. Plan your academic journey smartly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Productivity Analytics</h3>
              <p className="feature-description">
                Discover patterns in your study habits and get insights to optimize 
                your learning efficiency and time management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-content">
          <h2 className="stats-title">Trusted by Students Nationwide</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Improved GPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Universities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Academic Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of students who are already using AI to excel in their studies.
          </p>
          <button 
            className="cta-button cta-primary large"
            onClick={() => onNavigate('register')}
          >
            <span className="button-icon">✨</span>
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-icon">🧠</span>
              <span className="logo-text">Smart Academic Planner</span>
            </div>
            <p className="footer-description">
              Empowering students with AI-driven academic insights and planning tools.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#demo">Demo</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Smart Academic Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;