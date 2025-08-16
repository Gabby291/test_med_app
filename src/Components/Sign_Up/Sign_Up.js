import React, { useState } from 'react';
import './Sign_Up.css';
import { Link } from 'react-router-dom';

function Sign_Up() {
const [phoneNum, setPhone] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^\d{10}$/.test(phoneNum)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully!');
    }
  };
  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setErrors({});
  };
  

  return (
    <div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="signup-grid">
          <div className="signup-text">
            <h1>Sign Up</h1>
          </div>
          <div className="signup-text1" style={{ textAlign: "left" }}>
            Already a member?{" "}
            <span>
              <Link to="/login" style={{ color: "#2190FF" }}>
                Login
              </Link>
            </span>
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                 onChange={(e) => setName(e.target.value)}
                  id="name"
                  required
                  className="form-control"
                  placeholder="Enter your name"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={phoneNum}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-describedby="helpId"
                />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  required
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  required
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
              </div>
              <div className="btn-group">
                <button
                  type="submit"
                  className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-danger mb-2 waves-effect waves-light"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
