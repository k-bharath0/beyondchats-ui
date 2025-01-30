import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const ClientPage = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    console.log("Client website loaded");
  }, []);

  
  const toggleFeedbackForm = () => {
    setShowFeedback(!showFeedback);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    toast.success("Feedback submitted!", {
          position: "top-right",
          autoClose: 3000, 
        });
    setShowFeedback(false); 
  };

  return (
    <div className="client-page">
      <ToastContainer /> 
      {/* Topbar */}
      <div className="topbar">
        <span>
          Chatbot not working as intended?{" "}
          <button onClick={toggleFeedbackForm} style={{display:"inline"}}>Share feedback</button>
        </span>
      </div>

      <h1>Welcome to the Client's Website</h1>
      <p style={{padding:"0px 20px"}}>
        This is a dummy website for testing the chatbot integration. The chatbot
        will appear at the bottom-right corner after you click the "Test Chatbot"
        button in the admin panel.
      </p>

      <div className="content">
        <h2>About Our Business</h2>
        <p>
          We provide amazing services that help businesses grow through advanced
          chatbot technologies. Our solutions are easy to integrate and help you
          engage with your customers better.
        </p>

        <h2>Our Services</h2>
        <ul>
          <li>Chatbot Integration</li>
          <li>Customer Support Automation</li>
          <li>AI-driven Marketing</li>
        </ul>

        <h2>Contact Us</h2>
        <p>Reach out to us at <strong>contact@clientwebsite.com</strong></p>
      </div>

      {/* Feedback Section Modal */}
      {showFeedback && (
        <div className="feedback-modal">
          <div className="feedback-modal-content">
            <h3>Share Your Feedback</h3>
            <form onSubmit={handleFeedbackSubmit}>
              <textarea placeholder="Your feedback here..." rows="5" cols="40"></textarea>
              <br />
              <button type="submit">Submit Feedback</button>
              <button
                type="button"
                onClick={() => setShowFeedback(false)} // Close modal
                className="close-button"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Dummy Chatbot Widget */}
      <div className="chatbot-widget">
        <div className="chatbot-header">Chatbot</div>
        <div className="chatbot-body">
          <p>Welcome to our chatbot! How can I assist you?</p>
        </div>
        <button className="chatbot-button">Start Chat</button>
      </div>
    </div>
  );
};

export default ClientPage;
