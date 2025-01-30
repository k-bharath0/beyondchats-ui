import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const SetupOrganization = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchMeta = () => {
    if (!websiteUrl) {
      toast.error("Please enter a valid website URL.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    // Mock fetching meta description (Simulating API call)
    setTimeout(() => {
      setCompanyDescription("This is a mock meta description fetched from the website.");
      setLoading(false);
      toast.success("Meta description fetched successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !websiteUrl || !companyDescription) {
      toast.warning("Please fill all fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    
    toast.success("Organization setup completed!", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate("/scraped-webpages");
    }, 2000); 
  };

  return (
    <div style={{ marginTop: "30px",height:"70vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ToastContainer /> 

      <div className="formS">
        <h2 className="text-gradient">Setup Organization</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Company Website URL"
            onChange={(e) => setWebsiteUrl(e.target.value)}
            required
          />
          <button type="button" onClick={handleFetchMeta} disabled={loading}>
            {loading ? "Fetching..." : "Auto-Fetch Description"}
          </button>
          <textarea
            placeholder="Company Description"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            required
          />
          <button type="submit">Proceed</button>
        </form>
      </div>
      <div className="wave-background"></div>
    </div>
  );
};

export default SetupOrganization;
