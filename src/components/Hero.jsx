import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroTitleRef = useRef(null);
  const heroBottleRef = useRef(null);
  const heroSubtitleRef = useRef(null);

  useEffect(() => {
    // Animação do hero ao carregar
    gsap.from(heroTitleRef.current, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'power3.out'
    });

    gsap.from(heroBottleRef.current, {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      delay: 0.3,
      ease: 'back.out(1.7)'
    });

    gsap.from(heroSubtitleRef.current, {
      duration: 1,
      opacity: 0,
      y: 20,
      delay: 0.8,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section id="home" className="hero" role="banner">
      <div className="hero-gradient-animated"></div>
      <h1 className="hero-title" aria-label="Coca-Cola" ref={heroTitleRef}>
        <span className="title-line">COCA</span>
        <div className="hero-bottle-container">
          <img
            ref={heroBottleRef}
            id="coca-cola-bottle"
            src="/assets/img/cocacola.png"
            alt="Garrafa de Coca-Cola"
            className="hero-bottle"
            loading="eager"
          />
        </div>
        <span className="title-line">COLA</span>
      </h1>
      <div className="hero-content">
        <p className="hero-subtitle" ref={heroSubtitleRef}>Sabor Autêntico desde 1886</p>
        <a href="#historia" className="btn btn-primary" aria-label="Conheça nossa história">
          Conheça Nossa História
        </a>
      </div>
    </section>
  );
};

export default Hero;

