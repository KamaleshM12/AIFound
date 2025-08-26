import { useState, useRef } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadForm from "./components/UploadForm";
import Logos from "./components/WhatWeDo";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Results from "./components/Results";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState<any[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // This function is no longer called by the Navbar, but might be used elsewhere.
  // const handleUploadClick = () => {
  //   fileInputRef.current?.click();
  // };

  return (
    <div className="app-container">
      <p className="loogo">Index</p>
      <Navbar />
      <Hero>
        <UploadForm
          ref={fileInputRef}
          setResults={setResults}
          setImage={setImage}
        />
      </Hero>
      <Logos />
      <Testimonials />
      <Features />
      <Results results={results} image={image} />
      <About />
      <Footer />
    </div>
  );
}

export default App;