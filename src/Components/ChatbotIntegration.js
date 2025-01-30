import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"; 

const ChatbotIntegration = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [integrationFailed, setIntegrationFailed] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  

  // Handle "Test Chatbot" button click
  const handleTestChatbot = () => {
    // Open the client website in a new window (dummy client page)
    const clientSiteWindow = window.open("/client", "_blank");

    // Wait for the window to load and inject the chatbot widget
    clientSiteWindow.onload = () => {
      const chatbotWidget = clientSiteWindow.document.createElement("div");
      chatbotWidget.innerHTML = `
        <div style="
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 250px;
          color: white;
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        ">
          <h4 style="margin: 0;">Chatbot</h4>
          <div style="flex: 1; overflow-y: auto; margin-top: 10px;">
            <p style="color: white;">Welcome to our chatbot! How can I help you?</p>
          </div>
          <button">Start Chat</button>
        </div>
      `;
      clientSiteWindow.document.body.appendChild(chatbotWidget);
    };
  };

  // Handle "Send Instructions" button click
  const handleSendInstructions = () => {
    toast.success("Instructions sent to the developer's email!", {
      position: "top-right",
      autoClose: 3000, 
    });
  };

  // Handle "Test Integration" button click
  const handleTestIntegration = () => {
    const success = Math.random() > 0.3; 
    if (success) {
      setShowSuccess(true);
      setIntegrationFailed(false);
      setConfettiVisible(true);
      setTimeout(() => {
        setConfettiVisible(false); 
      }, 5000);
    } else {
      setShowSuccess(false);
      setIntegrationFailed(true);
    }
  };

  return (
    <div className="chatbot-integration" style={{ height:"70vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ToastContainer />
      <h2>Chatbot Integration</h2>

      {/* Test Chatbot Button */}
      <button onClick={handleTestChatbot}>Test Chatbot</button>

      {/* Integration Instructions */}
      <h3 style={{ color: "white" }}>Integrate on Your Website</h3>
      <p>Copy and paste the following code into the head section of your website:</p>
      <pre>{`<script src="https://example.com/chatbot.js"></script>`}</pre>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleSendInstructions} style={{ margin: "0px 4px", display: "inline" }}>
          Send to Developer
        </button>

        {/* Test Integration Button */}
        <button onClick={handleTestIntegration} style={{ margin: "0px", display: "inline" }}>
          Test Integration
        </button>
      </div>

      {/* Success UI */}
      {showSuccess && (
        <div className="success-message" style={{ marginTop: "10px" }}>
        
          {confettiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}
          <h3>🎉 Integration Successful!</h3>
          <button onClick={() => navigate("/admin-panel")}>Explore Admin Panel</button>
          <button onClick={() => navigate("/chatbot")}>Start Talking to Your Chatbot</button>

         
          <h4>Share Your Success</h4>
          <div className="social-buttons">
            
              <button className="social-btn facebook">
                <FaFacebookF size={30} />
              </button>
            

            
              <button className="social-btn twitter">
                <FaTwitter size={30} />
              </button>
            

            
              <button className="social-btn linkedin">
                <FaLinkedinIn size={30} />
              </button>
            

            
              <button className="social-btn whatsapp">
                <FaWhatsapp size={30} />
              </button>
            
          </div>
        </div>
      )}

      {/* Error UI */}
      {integrationFailed && (
        <div className="error-message" style={{ marginTop: "10px" }}>
          <h3>⚠️ Integration Not Detected!</h3>
          <p style={{ color: "black" }}>Check if the chatbot script is added correctly.</p>
        </div>
      )}
    </div>
  );
};

export default ChatbotIntegration;
