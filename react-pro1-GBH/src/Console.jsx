import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Console() {
  const [console, setConsole] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Removed the unnecessary activeTab state

  // This effect runs once when the Hardware component is first rendered
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5300/Con")
      .then((res) => res.json())
      .then((data) => {
        setConsole(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching hardware:", err);
        setError("Failed to fetch hardware");
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs only once

  return (
    <div className="container">
      <div className="row mt-4">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && console.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text flex-grow-1">{item.desc}</p>
                <a href="#" className="btn btn-primary mt-auto">
                  Know more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Console;