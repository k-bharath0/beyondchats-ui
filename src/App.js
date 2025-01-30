import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegistrationForm from "./Components/RegistrationForm";
import SetupOrganization from "./Components/SetupOrganization";
import ScrapedWebpages from "./Components/ScrapedWebpages";
import ChatbotIntegration from "./Components/ChatbotIntegration";
import ClientPage from './Components/ClientPage';
import Header from "./Components/Header";

import './App.css'

const App = () => {
  return (

    <Router>
      <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/setup-organization" element={<SetupOrganization />} />
        <Route path="/scraped-webpages" element={<ScrapedWebpages />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
        <Route path="/client" element={<ClientPage />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
