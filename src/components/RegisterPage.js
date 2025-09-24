import React, { useState } from 'react';
import './RegisterPage.css';
import './RegisterPage.css';

const RegisterPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    major: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.university) {
      newErrors.university = 'University is required';
    }

    if (!formData.major) {
      newErrors.major = 'Major is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Registration attempt:', formData);
      
      // Here you would typically make an API call to register
      // For now, we'll just simulate a successful registration
      alert('Registration successful! Welcome to Smart Academic Planner!');
      
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const universities = [
    'Harvard University',
    'Stanford University',
    'MIT',
    'University of California, Berkeley',
    'Yale University',
    'Princeton University',
    'Columbia University',
    'University of Chicago',
    'University of Pennsylvania',
    'Other'
  ];

  const majors = [
    'Computer Science',
    'Engineering',
    'Business Administration',
    'Biology',
    'Psychology',
    'Economics',
    'Political Science',
    'English Literature',
    'Mathematics',
    'Physics',
    'Chemistry',
    'History',
    'Art',
    'Other'
  ];

  return (
    <div className="register-container">
      {/* Background Elements */}
      <div className="register-background">
        <div className="bg-gradient"></div>
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Header */}
      <header className="register-header">
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
      <main className="register-main">
        <div className="register-content">
          <div className="register-card">
            {/* Progress Indicator */}
            <div className="progress-indicator">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentStep / 2) * 100}%` }}
                ></div>
              </div>
              <div className="progress-steps">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                  <span className="step-number">1</span>
                  <span className="step-label">Personal Info</span>
                </div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                  <span className="step-number">2</span>
                  <span className="step-label">Academic Info</span>
                </div>
              </div>
            </div>

            <div className="card-header">
              <div className="register-icon">
                <span>{currentStep === 1 ? '👤' : '🎓'}</span>
              </div>
              <h1 className="register-title">
                {currentStep === 1 ? 'Create Your Account' : 'Academic Information'}
              </h1>
              <p className="register-subtitle">
                {currentStep === 1 
                  ? 'Join thousands of students transforming their academic journey'
                  : 'Tell us about your university and studies'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              {currentStep === 1 && (
                <div className="form-step">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="Enter your full name"
                      />
                      <span className="input-icon">👤</span>
                    </div>
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
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

                  <button 
                    type="button"
                    onClick={handleNext}
                    className="submit-btn next-btn"
                  >
                    <span className="btn-icon">→</span>
                    Next Step
                  </button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="form-step">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="university" className="form-label">
                        University *
                      </label>
                      <div className="input-wrapper">
                        <select
                          id="university"
                          name="university"
                          value={formData.university}
                          onChange={handleInputChange}
                          className={`form-input form-select ${errors.university ? 'error' : ''}`}
                        >
                          <option value="">Select your university</option>
                          {universities.map((uni) => (
                            <option key={uni} value={uni}>{uni}</option>
                          ))}
                        </select>
                        <span className="input-icon">🏫</span>
                      </div>
                      {errors.university && <span className="error-message">{errors.university}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="major" className="form-label">
                        Major *
                      </label>
                      <div className="input-wrapper">
                        <select
                          id="major"
                          name="major"
                          value={formData.major}
                          onChange={handleInputChange}
                          className={`form-input form-select ${errors.major ? 'error' : ''}`}
                        >
                          <option value="">Select your major</option>
                          {majors.map((major) => (
                            <option key={major} value={major}>{major}</option>
                          ))}
                        </select>
                        <span className="input-icon">📚</span>
                      </div>
                      {errors.major && <span className="error-message">{errors.major}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`form-input ${errors.password ? 'error' : ''}`}
                        placeholder="Create a strong password"
                      />
                      <span className="input-icon">🔒</span>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                    <div className="password-requirements">
                      <small>Password must contain uppercase, lowercase, and number (8+ characters)</small>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                        placeholder="Confirm your password"
                      />
                      <span className="input-icon">🔐</span>
                    </div>
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>

                  <div className="form-group">
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className={`checkbox ${errors.agreeToTerms ? 'error' : ''}`}
                      />
                      <span className="checkbox-label">
                        I agree to the <button type="button" className="link-btn">Terms of Service</button> and{' '}
                        <button type="button" className="link-btn">Privacy Policy</button>
                      </span>
                    </label>
                    {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
                  </div>

                  {errors.submit && (
                    <div className="submit-error">
                      {errors.submit}
                    </div>
                  )}

                  <div className="form-buttons">
                    <button 
                      type="button"
                      onClick={handleBack}
                      className="submit-btn back-btn-form"
                    >
                      <span className="btn-icon">←</span>
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className={`submit-btn register-btn ${loading ? 'loading' : ''}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="loading-spinner"></span>
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">✨</span>
                          Create Account
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            <div className="register-footer">
              <p>
                Already have an account?{' '}
                <button 
                  className="link-btn"
                  onClick={() => onNavigate('login')}
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;