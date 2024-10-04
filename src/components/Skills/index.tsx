import { Container } from "../../styles";
import "./styles.css";
import { Url } from "../../utils/UrlImg";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      const currentWidth =
        carousel.current.scrollWidth - carousel.current.offsetWidth;
      setWidth(currentWidth);
      console.log("Current Width:", currentWidth);
    }
  }, []);

  return (
    <Container>
      <section className="section__skills" id="skills">
        <h2>Skills</h2>
        <p>
          Tecnologias que tive oportunidade de estudar até o momento no curso
        </p>
      </section>
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          ref={carousel}
        >
          <div className="image">
            <h3>HTML5</h3>
            <img src={Url.html} alt="Logo HTML" />
          </div>
          <div className="image">
            <h3>CSS3</h3>
            <img src={Url.css} alt="Logo CSS" />
          </div>
          <div className="image">
            <h3>JavaScript</h3>
            <img src={Url.js} alt="Logo JS" />
          </div>
          <div className="image">
            <h3>React</h3>
            <img src={Url.react} alt="Logo React" />
          </div>
          <div className="image">
            <h3>TypeScript</h3>
            <img src={Url.ts} alt="Logo TS" />
          </div>
          <div className="image">
            <h3>Jest</h3>
            <img src={Url.jest} alt="Logo Jest" />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Skills;
