// import React from "react";

const Hero: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="hero" id="hero">
    <div className="hero-badge">🚀 We raised $1M as pre-seed fund</div>
    <h1>The AI SaaS your product needs</h1>
    <p>
      Our AI SaaS solution enhances your product with advanced artificial
      intelligence, streamlining operations and driving efficiency.
    </p>
    {children}
  </section>
);

export default Hero;
