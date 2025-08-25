import React from "react";

const Features = () => (
  <section className="features-section" id="features">
    <h2>Access to the future of work</h2>
    <p className="section-subtitle">
      Experience AI-driven features, intelligent automation, seamless
      integration, and real-time insights.
    </p>
    <div className="features-grid">
      <div className="feature-card feature-card-large">
        <div className="text-content">
          <h3>Build Scalable product with our AI</h3>
          <p>
            Easily scale resources up or down based on business needs without
            hardware limits.
          </p>
        </div>
        <div className="image-content">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Team working"
          />
        </div>
      </div>
      <div className="feature-card">
        <h3>Cost-effectiveness</h3>
        <p>
          Reduce upfront costs with a subscription-based model, eliminating
          hardware maintenance.
        </p>
      </div>
      <div className="feature-card">
        <h3>Analytics and Insights</h3>
        <p>
          Gain valuable insights through built-in analytics and reporting for
          data-driven decisions.
        </p>
      </div>
    </div>
  </section>
);

export default Features;
