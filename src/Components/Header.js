// src/components/Header.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle logout
  const handleLogout = () => {
    // Redirect to the registration page
    navigate("/register");
  };

  // Only show logout button if we're not on the registration page
  const showLogoutButton = location.pathname !== "/register" && location.pathname !== "/client";
  const showHeader = location.pathname !== "/client";
  return (
    <header style={headerStyles}>
      {showHeader && (
      <div className="text-gradient">
        <h1 style={{borderBottom:"1px solid white",paddingBottom:"15px"}}>BeyondChats</h1>
      </div>)}
      {showLogoutButton && (
        <div className="logout">
          {/* <button onClick={handleLogout} style={logoutButtonStyles}>Logout</button> */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  color: 'white',
  boxSizing:'border-box',
};

// const logoutButtonStyles = {
//   padding: '16px',
//   backgroundColor: '#0dcaf0',
//   color: 'black',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   fontWeight: 'bold',
// };

export default Header;
