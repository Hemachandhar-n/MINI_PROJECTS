import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Hardware from './Hardware';
import Console from './Console'
import Games from "./Games";

function Bnavsandtabs() {
  const [pcs, setPcs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // State to manage which tab is currently active. Starts with 'pcBuilds'.
  const [activeTab, setActiveTab] = useState('pcBuilds');

  // Fetch PC builds data when the component mounts
  useEffect(() => {
    // Only fetch if the active tab is pcBuilds to avoid unnecessary calls
    if (activeTab === 'pcBuilds') {
      setLoading(true);
      fetch("http://localhost:5300/pc")
        .then((res) => res.json())
        .then((data) => {
          setPcs(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching PCs:", err);
          setError("Failed to fetch PCs");
          setLoading(false);
        });
    }
  }, [activeTab]); // This effect runs when activeTab changes

  return (
    <main className="container-fluid">
      <h1 className="display-1 mt-5 ms-3">Built_in Paradise</h1>
      <hr />

      {/* Nav Pills */}
      <ul
        className="nav nav-pills mb-3 d-flex justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        {/* PRE_BUILD PC Tab Button */}
        <li className="nav-item" role="presentation">
          <button
            onClick={() => setActiveTab('pcBuilds')}
            // The 'active' class is now dynamic
            className={`nav-link ${activeTab === 'pcBuilds' ? 'active' : ''}`}
            type="button"
          >
            PRE_BUILD PC
          </button>
        </li>
        {/* HARDWARE & ACCESSORIES Tab Button */}
        <li className="nav-item" role="presentation">
          <button
            onClick={() => setActiveTab('Hardware')}
            // The 'active' class is now dynamic
            className={`nav-link ${activeTab === 'Hardware' ? 'active' : ''}`}
            type="button"
          >
            HARDWARE & ACCESSORIES
          </button>
        </li>
        {/* CONSOLE Tab Button */}
        <li className="nav-item" role="presentation">
          <button
            onClick={() => setActiveTab('Console')}
            className={`nav-link ${activeTab === 'Console' ? 'active' : ''}`}
            type="button"
          >
            CONSOLE
          </button>
        </li>
        {/* GAMES & CD Tab Button */}
        <li className="nav-item" role="presentation">
          <button
            onClick={() => setActiveTab('Games')}
            className={`nav-link ${activeTab === 'Games' ? 'active' : ''}`}
            type="button"
          >
            GAMES & CD
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="pills-tabContent">
        
        {/* PC Cards Content Pane */}
        <div
          // The 'show' and 'active' classes are now conditional
          className={`tab-pane fade ${activeTab === 'pcBuilds' ? 'show active' : ''}`}
        >
          <div className="container">
            <div className="row mt-4">
              {loading && <p className="text-center">Loading...</p>}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && pcs.map((pc) => (
                <div className="col-md-3 mb-4" key={pc.id}>
                  <div className="card h-100 shadow">
                    <img
                      src={pc.img}
                      className="card-img-top"
                      alt={pc.title}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{pc.title}</h5>
                      <p className="card-text flex-grow-1">{pc.desc}</p>
                      <a href="#" className="btn btn-primary mt-auto">
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hardware and Accessories Content Pane */}
        <div
          className={`tab-pane fade ${activeTab === 'Hardware' ? 'show active' : ''}`}
        >
          {/* We only render the Hardware component when its tab is active */}
          {activeTab === 'Hardware' && <Hardware />}
        </div>

        {/* Console Content Pane */}
        <div className={`tab-pane fade ${activeTab === 'Console' ? 'show active' : ''}`}>
          {activeTab === 'Console' && <Console/>}
        </div>

        {/* Games Content Pane */}
        <div className={`tab-pane fade ${activeTab === 'Games' ? 'show active' : ''}`}>
          {activeTab === 'Games' && <Games/>}
        </div>
      </div>
    </main>
  );
}

export default Bnavsandtabs;