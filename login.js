import React, { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeRole, setActiveRole] = useState('Faculty'); // Default to Faculty

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRoleChange = (role) => {
    setActiveRole(role);
  };

  return (
    <div className="outer-container">
      <div className="inner-panel">
        <div className="left-panel">
          <div className="logo">
            <h1>CAMPUS</h1>
            <h1>CORE</h1>
          </div>
          <div className="welcome-container">
            <p className="welcome-text">Welcome to Your Academic Journey</p>
            <p className="description">
              Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
            </p>
          </div>
          <div className="features">
            <div className="feature">Course Management</div>
            <div className="feature">Schedule Tracking</div>
            <div className="feature">Progress Analytics</div>
          </div>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <p className="testimonial">
            As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week.
            <br /><br />Dr. Michael T., Engineering Faculty
          </p>
        </div>
        <div className="right-panel">
          <div className="role-buttons">
            <button
              className={`role-btn ${activeRole === 'Student' ? 'active' : ''}`}
              onClick={() => handleRoleChange('Student')}
            >
              Student
            </button>
            <button
              className={`role-btn ${activeRole === 'Faculty' ? 'active' : ''}`}
              onClick={() => handleRoleChange('Faculty')}
            >
              Faculty
            </button>
          </div>
          {activeRole === 'Faculty' && (
            <>
              <h2 className="google-login">Logging in as Faculty</h2>
              <form className="login-form">
                <div className="form-group">
                  <label><strong>Faculty ID or Email</strong></label>
                  <input type="text" placeholder="Enter your Faculty ID or email" />
                </div>
                <div className="form-group">
                  <div className="label-container">
                    <label><strong>Password</strong></label>
                    <a href="/forgot-password" className="forgot-password">Forgot password?</a>
                  </div>
                  <div className="password-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="eye-button"
                      onClick={togglePasswordVisibility}
                    >
                      👁️
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" strong /> Remember me
                  </label>
                  <button type="submit" className="login-btn">Login</button>
                </div>
              </form>
            </>
          )}
          {activeRole === 'Student' && (
            <>
              <h2 className="google-login">Logging in as Student</h2>
              <form className="login-form">
                <div className="form-group">
                  <label><strong>Student ID or Email</strong></label>
                  <input type="text" placeholder="Enter your Student ID or email" />
                </div>
                <div className="form-group">
                  <div className="label-container">
                    <label><strong>Password</strong></label>
                    <a href="/forgot-password" className="forgot-password">Forgot password?</a>
                  </div>
                  <div className="password-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="eye-button"
                      onClick={togglePasswordVisibility}
                    >
                      👁️
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="submit" className="login-btn">Login</button>
                </div>
              </form>
            </>
          )}
          <div className="google-login">
            <p>-------------------or continue with-------------------</p>
            <br/>
            <button className="google-btn">Log in with Google</button>
          </div>
        </div>
      </div>
      <div className="custom-footer">
        <span className="footer-left">designed and developed by zoro team</span>
        <span className="footer-center">YOUR NAME</span>
        <span className="footer-right">© 2025 Zoro Innovations</span>
      </div>
    </div>
  );
}

export default Login;