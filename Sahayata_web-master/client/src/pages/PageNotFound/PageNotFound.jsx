import React, { useState } from 'react';
import "./style.css";

const PageNotFound = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    errors: {},
    isSubmitting: false,
    submitStatus: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';

    setFormState(prev => ({
      ...prev,
      errors
    }));

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: true,
        submitStatus: null
      }));

      try {
        // Simulated async submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setFormState({
          errors: {},
          isSubmitting: false,
          submitStatus: 'success'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        // Clear success message after 3 seconds
        setTimeout(() => {
          setFormState(prev => ({
            ...prev,
            submitStatus: null
          }));
        }, 3000);

      } catch (error) {
        setFormState({
          errors: {},
          isSubmitting: false,
          submitStatus: 'error'
        });
      }
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <div className="contact-info-section">
          <div className="info-content">
            <div className="contact-header">
              <h1>Connect With Us</h1>
              <p>We're excited to hear your ideas and answer your questions!</p>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="icon-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>Pune</span>
              </div>

              <div className="contact-detail">
                <div className="icon-wrapper">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span>+91-9146307511</span>
              </div>

              <div className="contact-detail">
                <div className="icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>sahayataorganization@gmail.com</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/_sahayata_/" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/sahayata-foundation/" className="social-icon linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formState.errors.name ? 'error' : ''}
              />
              {formState.errors.name && <div className="error-text">{formState.errors.name}</div>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formState.errors.email ? 'error' : ''}
              />
              {formState.errors.email && <div className="error-text">{formState.errors.email}</div>}
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={formState.errors.message ? 'error' : ''}
              ></textarea>
              {formState.errors.message && <div className="error-text">{formState.errors.message}</div>}
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? (
                <div className="spinner"></div>
              ) : (
                'Submit'
              )}
            </button>

            {formState.submitStatus && (
              <div className={`submission-message ${formState.submitStatus}`}>
                {formState.submitStatus === 'success'
                  ? 'Your message has been sent!'
                  : 'Something went wrong. Please try again.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
