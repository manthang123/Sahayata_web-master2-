import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const JoinUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    area: '',
    gender: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    // Area validation
    if (!formData.area) {
      newErrors.area = "Please select an area";
    }

    // Gender validation
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        console.log("Form Submitted:", formData);
        
        // Navigate to success page or show success message
        navigate('/success', { 
          state: { 
            message: `Welcome, ${formData.name}! Your registration is complete.` 
          } 
        });
        
        setIsSubmitting(false);
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  };

  // Areas for selection
  const areas = [
    "Kothrud", 
    "Karve Nagar", 
    "NIBM", 
    "Bibvewadi"
  ];

  return (
    <div className="join-page">
      <div className="join-container">
        <div className="title">Registration Form</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="input-box">
              <span className="details">Full Name</span>
              <input 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            {/* Email Input */}
            <div className="input-box">
              <span className="details">Email</span>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            {/* Mobile Input */}
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input 
                type="tel" 
                name="mobile"
                placeholder="Enter your number" 
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>

            {/* Area Selection */}
            <div className="input-box">
              <span className="details">Area</span>
              <select 
                name="area"
                value={formData.area}
                onChange={handleChange}
              >
                <option value="">-- Select Area --</option>
                {areas.map((area, index) => (
                  <option key={index} value={area.toLowerCase()}>
                    {area}
                  </option>
                ))}
              </select>
              {errors.area && <span className="error">{errors.area}</span>}
            </div>

            {/* Gender Selection */}
            <div className="gender-details">
              <span className="gender-title">Gender</span>
              <div className="category">
                {['Male', 'Female', 'Other'].map((gender) => (
                  <div key={gender} className="radio-item">
                    <input 
                      type="radio" 
                      name="gender" 
                      id={gender.toLowerCase()} 
                      value={gender.toLowerCase()}
                      checked={formData.gender === gender.toLowerCase()}
                      onChange={handleChange}
                    />
                    <label htmlFor={gender.toLowerCase()}>
                      <span className="gender">{gender}</span>
                    </label>
                  </div>
                ))}
              </div>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>

            {/* Submit Button */}
            <div className="button">
              <button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;