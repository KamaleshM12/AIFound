// import React from 'react';

const WhatWeDo = () => (
  <section className="what-we-do-section">
    <h2>What we do</h2>
    <div className="what-we-do-container">
      <div className="what-we-do-card">
        <div className="card-icon">
          {/* Placeholder for Marketing Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00e676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3>Marketing</h3>
        <p>Marketing and analytics of the beauty and wellness markets</p>
        <button className="learn-more-btn">learn more →</button>
      </div>
      <div className="what-we-do-card">
        <div className="card-icon">
            {/* Placeholder for Support Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#00e676" strokeWidth="2"/>
                <line x1="8" y1="8" x2="16" y2="8" stroke="#00e676" strokeWidth="2"/>
                <line x1="8" y1="12" x2="16" y2="12" stroke="#00e676" strokeWidth="2"/>
                <line x1="8" y1="16" x2="12" y2="16" stroke="#00e676" strokeWidth="2"/>
            </svg>
        </div>
        <h3>Support</h3>
        <p>IT and legal support for beauty and wellness brands</p>
        <button className="learn-more-btn">learn more →</button>
      </div>
      <div className="what-we-do-card">
        <div className="card-icon">
            {/* Placeholder for Design Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#00e676" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#00e676" strokeWidth="2"/>
            </svg>
        </div>
        <h3>Design</h3>
        <p>Manufacturing and packaging design</p>
        <button className="learn-more-btn">learn more →</button>
      </div>
    </div>
  </section>
);

export default WhatWeDo;
