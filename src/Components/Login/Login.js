import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login successful!');
      // Add login logic here
    }
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div>
      <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member?{' '}
            <span>
              <Link to="/signup" style={{ color: '#2190FF' }}>
                Sign Up Here
              </Link>
            </span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
              </div>
              <div className="btn-group">
                <button
                  type="submit"
                  className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-danger mb-2 waves-effect waves-light"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
              <br />
              <div className="login-text">Forgot Password?</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

  
