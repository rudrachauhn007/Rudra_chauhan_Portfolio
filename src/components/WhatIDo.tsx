import { useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const techCategories = [
  {
    id: "LANGUAGES",
    subtitle: "Programming & Scripting",
    tags: ["C++", "C", "Python", "Java", "SQL", "JavaScript", "PHP"]
  },
  {
    id: "TECHNOLOGIES",
    subtitle: "Web & ML Frameworks",
    tags: ["React", "HTML", "CSS", "Bootstrap", "TensorFlow"]
  },
  {
    id: "DATABASES",
    subtitle: "Data Storage & Management",
    tags: ["PostgreSQL", "MySQL"]
  },
  {
    id: "CORE SKILLS",
    subtitle: "Computer Science Fundamentals",
    tags: [
      "DSA",
      "OOP (C++)",
      "Computer Networks",
      "DBMS",
      "Operating Systems",
      "COA"
    ]
  }
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          T<span className="hat-h2">ECH</span>
          <div>
            S<span className="do-h2">TACK</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div
          className="what-box-in"
          style={{ height: "600px", display: "flex" }}
        >
          <div className="what-border2">
            <svg width="100%" height="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`what-content ${
                ScrollTrigger.isTouch ? "" : "what-noTouch"
              }`}
              ref={(el) => setRef(el, idx)}
              onClick={(e) => handleClick(e.currentTarget)}
            >
              <div className="what-border1">
                <svg height="100%" width="100%">
                  {idx === 0 && (
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  )}

                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>

              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{cat.id}</h3>

                <h4>{cat.subtitle}</h4>

                <h5>Skillset & tools</h5>

                <div className="what-content-flex">
                  {cat.tags.map((tag, tIdx) => (
                    <div className="what-tags" key={tIdx}>
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");

  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

   ;
  }
}