import React, { useState } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Jim Doe',
    phone: '123-456-7890',
    email: 'jim.doe@example.com',
  });
  const [editMode, setEditMode] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState(userDetails);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({
      ...updatedDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails(updatedDetails);
    setEditMode(false);
  };

  return (
    <div className="profile-card">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={updatedDetails.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={updatedDetails.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={updatedDetails.email}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p><b>Name:</b> {userDetails.name}</p>
          <p><b>Phone:</b> {userDetails.phone}</p>
          <p><b>Email:</b> {userDetails.email}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;