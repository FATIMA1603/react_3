// src/profile/Profile.js
import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const { fullName, bio, profession, children, handleName } = props;
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {children}
      <h1 style={{ color: 'red' }}>{fullName}</h1>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
      <button onClick={() => handleName(fullName)}>Click Me</button>
    </div>
  );
}

//create prototype
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: 'Fatima Bysf',
  bio: 'Full stack Developer',
  profession: 'Web Developer',
};

export default Profile;