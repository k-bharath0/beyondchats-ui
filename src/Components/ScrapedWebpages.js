import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScrapedWebpages = () => {
  const navigate = useNavigate();

  // Dummy data for webpages
  const webpages = [
    { id: 1, url: "https://example.com/home", status: "Scraped", data: ["Welcome text", "Company overview"] },
    { id: 2, url: "https://example.com/about", status: "Scraped", data: ["Mission statement", "Team details"] },
    { id: 3, url: "https://example.com/blog", status: "Pending", data: [] },
  ];

  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div style={{ marginTop: "30px",height:"70vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="scraped-webpages" >
      <h2 className="text-gradient">Scraped Webpages</h2>
      <p>Below are the pages detected from your website:</p>

      <ul>
        {webpages.map((page) => (
          <li key={page.id} className={`page-item ${page.status.toLowerCase()}`}>
            <span >{page.url}</span>
            <span>{page.status === "Scraped"}</span>
            {page.status === "Scraped" && (
              <button onClick={() => setSelectedPage(page)} style={{margin:"0px"}}>View Data</button>
            )}
            {page.status === "Pending" && (
              <button style={{margin:"0px"}}>Processing</button>
            )}
          </li>
        ))}
      </ul>
      
      {selectedPage && (
        <div className="scraped-data-modal">
          <h4 className="text-gradient">Scraped Data for {selectedPage.url}</h4>
          <ul>
            {selectedPage.data.map((chunk, index) => (
              <li key={index}>* {chunk}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedPage(null)}>Close</button>
        </div>
      )}

      <button onClick={() => navigate("/chatbot-integration")}>Proceed to Chatbot Integration</button>
    </div>
    
    </div>
  );
};

export default ScrapedWebpages;
