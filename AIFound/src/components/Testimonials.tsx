// import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This is the best thing that happened to my small business.",
      author: "Asa Walter",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "They are great. Loved working with them.",
      author: "Zahid Miles",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "Awesome services. I will continue to use them.",
      author: "Casper Leigh",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      quote: "By far the best. Super efficient team!",
      author: "Cian Riley",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What our Clients say!</h2>
        <div className="testimonials-scroller">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p>"{t.quote}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.author} />
                <h4>{t.author}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
