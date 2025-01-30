import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    toast.info("Registration successful! Please verify your email.", {
      position: "top-right",
      autoClose: 3000, 
    });
  };

  const handleGoogleLogin = () => {
    toast.success("Google Login Clicked (Dummy Functionality)", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      navigate("/setup-organization");
    }, 2000);
  };

  const handleVerification = () => {
    if (verificationCode === "123456") {
      toast.success("Email Verified! Moving to Setup Organization.", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/setup-organization");
      }, 2000); 
    } else {
      toast.error("Invalid Code!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <ToastContainer /> 

      <div className="formS">
        <h2 className="text-gradient">Register</h2>

        {!isRegistered ? (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
            <button type="button" onClick={handleGoogleLogin}>
              Continue with Google
            </button>
          </form>
        ) : (
          <div>
            <h3 className="text-gradient">Email Verification</h3>
            <input
              type="text"
              placeholder="Enter Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button onClick={handleVerification}>Verify</button>
            <p style={{color:"white",fontSize:"15px",textAlign:"center"}}>Enter: 123456</p>
          </div>
        )}
      </div>
      <div className="wave-background"></div>
    </div>
  );
};

export default RegistrationForm;
