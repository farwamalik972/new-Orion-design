import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import gsap from "gsap";

const PortfolioLanding = () => {
    useEffect(() => {
        const mask = document.querySelector("#div-mask-back");
        const tl = gsap.timeline();
    
        tl.to(mask, {
          "--m1": "20%",
          delay: 2,
          duration: 0.5,
          ease: "back.out(2)",
        }).to(mask, {
          "--m2": "30%",
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(2)",
        });
    
        window.addEventListener("mousemove", (e) => {
          const { clientX, clientY } = e;
          const x = Math.round((clientX / window.innerWidth) * 100);
          const y = Math.round((clientY / window.innerHeight) * 100);
    
          gsap.to(mask, {
            "--x": `${x}%`,
            "--y": `${y}%`,
            duration: 0.3,
            ease: "sine.out",
          });
        });
      }, []);

      
    
  return (
<Container fluid className="wrapper">
      <div className="area fixed-bg">
        <ul className="circles">
          {[...Array(10)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      <div id="div-mask-front">
        <h1>Orion Lighting</h1>
      </div>

      <div id="div-mask-back" aria-hidden="true">
        <div className="area absolute-bg">
          <ul className="circles">
            {[...Array(10)].map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>

        <pre>
          <span className="variable"></span><span className="character"></span>{" "}
          <span className="string">“At Orion Lighting, we are revolutionizing LED PCB manufacturing with cutting-edge technology,<br></br> precision engineering, and an unwavering commitment to quality. </span>
          <br />
          <span className="variable"></span> <span className="character"></span>{" "}
          <span className="number">Our advanced manufacturing processes ensure high-performance, reliable, and cost-effective <br></br>solutions tailored to meet the evolving needs of the lighting and<br></br> 
          electronics industries. Whether for commercial, industrial, </span>
          <br />
          <span className="variable"></span> <span className="character"></span>{" "}
          <span className="string"> or custom applications, we deliver innovative LED PCB solutions that power a brighter,<br></br> more efficient future.”</span>
          <br />
        </pre>
      </div>
    </Container>
  );
};

export default PortfolioLanding;
