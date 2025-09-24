import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, accept any valid email/password
      console.log('Login attempt:', formData);
      
      // Here you would typically make an API call to authenticate
      // For now, we'll just simulate a successful login
      alert('Login successful! (Demo)');
      
    } catch (error) {
      setErrors({ submit: 'Login failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Background Elements */}
      <div className="login-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern">
          <div className="pattern-dot"></div>
          <div className="pattern-dot"></div>
          <div className="pattern-dot"></div>
          <div className="pattern-dot"></div>
          <div className="pattern-dot"></div>
        </div>
      </div>

      {/* Header */}
      <header className="login-header">
        <div className="header-content">
          <button 
            className="back-btn"
            onClick={() => onNavigate('home')}
          >
            <span className="back-icon">←</span>
            Back to Home
          </button>
          <div className="logo">
            <span className="logo-icon">🧠</span>
            <span className="logo-text">Smart Academic Planner</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="login-main">
        <div className="login-content">
          <div className="login-card">
            <div className="card-header">
              <div className="login-icon">
                <span>👋</span>
              </div>
              <h1 className="login-title">Welcome Back!</h1>
              <p className="login-subtitle">
                Sign in to your account to continue your academic journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email address"
                  />
                  <span className="input-icon">📧</span>
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                  />
                  <span className="input-icon">🔒</span>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-label">Remember me</span>
                </label>
                <button type="button" className="forgot-password">
                  Forgot Password?
                </button>
              </div>

              {errors.submit && (
                <div className="submit-error">
                  {errors.submit}
                </div>
              )}

              <button 
                type="submit" 
                className={`submit-btn ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Signing In...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    Sign In
                  </>
                )}
              </button>
            </form>

            <div className="login-divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <button className="social-btn google-btn">
                <span className="social-icon">🅶</span>
                Google
              </button>
              <button className="social-btn microsoft-btn">
                <span className="social-icon">Ⓜ️</span>
                Microsoft
              </button>
            </div>

            <div className="login-footer">
              <p>
                Don't have an account?{' '}
                <button 
                  className="link-btn"
                  onClick={() => onNavigate('register')}
                >
                  Sign up here
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;