import { useState, useRef } from "react";
import "./Landing.css";
export default function Landing() {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    setIsScrolling(true);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = (event) => {
    if (!isScrolling) return;

    event.preventDefault();
    const x = event.pageX - containerRef.current.offsetLeft;
    const dx = x - startX;
    containerRef.current.scrollLeft = scrollLeft - dx;
  };
  const images = {
    cards: ["Card1.png", "Card2.png", "Card3.png"],
    path: "./images/",
  };
  const testimonials = [
    {
      name: "Jack F",
      role: "Ex Blackrock PM",
      quote:
        "“Love how Loch integrates portfolio <br/>analytics and whale watching into one <br/>unified app.”",
    },
    {
      name: "Yash P",
      role: "Research, 3poch Crypto Hedge Fund",
      quote:
        "“I use Loch everyday now. I don't think I <br/>could analyze crypto whale trends <br/>markets without it. I'm addicted!”",
    },
    {
      name: "Shiv S",
      role: "Co-Founder Magik Labs",
      quote:
        "“Managing my own portfolio is helpful and well designed. What’s <br/>really interesting is watching the whales though. No one else <br/>has made whale tracking so simple.”",
    },
  ];
  return (
    <div className="landing">
      <div className="notifications">
        <div className="text">
          <img src="./images/Bell.png" className="bell" alt="bell" />
          <h2>Get notified when a highly correlated whale makes a move</h2>
          <p>
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="images">
          {images.cards.map((name) => (
            <img className="card-img" src={images.path + name} alt="" />
          ))}
        </div>
      </div>
      <div className="watch">
        <div className="text">
          <img src="./images/Eye.png" className="eye" alt="eye" />
          <h2>Watch what the whales are doing</h2>
          <p>
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
        <img src="./images/Cohorts.png" className="eye" alt="eye" />
      </div>
      <div className="testimonials">
        <h3>Testimonials</h3>
        <div className="line" />
        <div className="bottom">
          <img src="./images/Logo.png" alt="logo" />
          <div
            className="testimonial-snippets"
            ref={containerRef}
            // className="horizontal-scroll"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((data) => (
              <div className="card">
                <div className="top">
                  <p className="name">{data.name}</p>
                  <p className="role">{data.role}</p>
                </div>
                <p className="quote">
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: data.quote }} />
                  </p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
