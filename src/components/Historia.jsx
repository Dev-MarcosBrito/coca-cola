import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Historia = () => {
  const historiaImageRef = useRef(null);
  const historiaSvgRef = useRef(null);
  const historiaContentRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const historiaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        markers: false
      }
    });

    historiaTimeline.from(historiaImageRef.current, {
      opacity: 0,
      scale: 0.6,
      y: 50,
      rotation: -15,
      duration: 1.2,
      ease: 'back.out(1.7)'
    });

    historiaTimeline.from(historiaSvgRef.current, {
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 1
    }, '-=0.8');
  }, []);

  return (
    <section id="historia" className="historia-section" role="region" aria-labelledby="historia-title" ref={sectionRef}>
      <div className="historia-container">
        <div className="historia-visual">
          <div className="historia-image-wrapper">
            <img
              ref={historiaImageRef}
              src="/assets/img/cocacola.png"
              alt="Garrafa clássica da Coca-Cola - símbolo de tradição desde 1886"
              className="historia-image"
              loading="lazy"
            />
          </div>
          <svg
            ref={historiaSvgRef}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="historia-svg"
            aria-hidden="true"
          >
            <path
              fill="#E41A1C"
              d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <article className="historia-content" ref={historiaContentRef}>
          <h2 id="historia-title" className="section-title">Uma História de Sabor e Inovação</h2>
          <p className="historia-text">
            Desde 1886, a Coca-Cola tem sido sinônimo de momentos especiais e felicidade compartilhada.
            Criada pelo farmacêutico Dr. John Stith Pemberton em Atlanta, Geórgia, nossa receita única
            conquistou o mundo com seu sabor inconfundível e capacidade de unir pessoas.
          </p>
          <p className="historia-text">
            Ao longo de mais de 130 anos, mantivemos nosso compromisso com a qualidade, inovação e
            responsabilidade social. Cada garrafa carrega não apenas um refrigerante, mas uma tradição
            de excelência e um compromisso com o futuro sustentável do planeta.
          </p>
          <p className="historia-text">
            Hoje, continuamos inovando, criando novos sabores e formatos, sempre respeitando nossa
            essência: proporcionar momentos de felicidade e refrescância para milhões de pessoas ao redor do mundo.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Historia;

