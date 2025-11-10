import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Produtos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  const produtos = [
    {
      id: 'produto-1',
      title: 'Coca-Cola Original',
      description: 'O sabor clássico e inconfundível que conquistou o mundo desde 1886.',
      image: '/assets/img/cocacola.png',
      alt: 'Coca-Cola Original'
    },
    {
      id: 'produto-2',
      title: 'Coca-Cola Zero Açúcar',
      description: 'Todo o sabor da Coca-Cola, sem açúcar. Perfeito para quem busca o sabor sem calorias.',
      image: '/assets/img/cocacola.png',
      alt: 'Coca-Cola Zero Açúcar'
    },
    {
      id: 'produto-3',
      title: 'Coca-Cola Light',
      description: 'Refrescância e sabor com menos calorias. Ideal para seu estilo de vida.',
      image: '/assets/img/cocacola.png',
      alt: 'Coca-Cola Light'
    }
  ];

  useEffect(() => {
    if (trackRef.current) {
      const translateX = -currentIndex * 100;
      trackRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out'
      });
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + produtos.length) % produtos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % produtos.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="produtos" className="produtos-section" role="region" aria-labelledby="produtos-title" ref={sectionRef}>
      <h2 id="produtos-title" className="section-title produtos-title">Nossos Produtos</h2>
      <p className="section-subtitle">Descubra a linha completa de sabores e formatos</p>
      
      <div className="carousel-container" role="region" aria-label="Carrossel de produtos">
        <button
          className="carousel-btn carousel-btn-prev"
          id="carouselPrev"
          aria-label="Produto anterior"
          onClick={handlePrev}
        >
          <span aria-hidden="true">‹</span>
        </button>
        
        <div className="carousel-track" id="carouselTrack" ref={trackRef}>
          {produtos.map((produto) => (
            <div key={produto.id} className="card" role="article" aria-labelledby={produto.id}>
              <div className="card-glow"></div>
              <div className="card-image">
                <div className="card-image-bg"></div>
                <img
                  src={produto.image}
                  alt={produto.alt}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 id={produto.id} className="card-title">{produto.title}</h3>
                <p className="card-description">{produto.description}</p>
                <button className="btn btn-secondary" aria-label={`Comprar ${produto.title}`}>
                  <span className="btn-text">Comprar Agora</span>
                  <span className="btn-ripple"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button
          className="carousel-btn carousel-btn-next"
          id="carouselNext"
          aria-label="Próximo produto"
          onClick={handleNext}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      
      <div className="carousel-indicators" role="tablist" aria-label="Indicadores do carrossel">
        {produtos.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            id={`indicator-${index}`}
            aria-label={`Ir para produto ${index + 1}`}
            role="tab"
            aria-selected={index === currentIndex}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Produtos;

