import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { href: '#home', label: 'Home', ariaLabel: 'Ir para seção Home' },
    { href: '#historia', label: 'História', ariaLabel: 'Ir para seção História' },
    { href: '#produtos', label: 'Produtos', ariaLabel: 'Ir para seção Produtos' },
    { href: '#contato', label: 'Contato', ariaLabel: 'Ir para seção Contato' }
  ];

  return (
    <header className="header">
      <nav className="nav-container" role="navigation" aria-label="Navegação principal">
        <a href="#home" className="logo" aria-label="Coca-Cola - Ir para o início">
          <img src="/assets/img/cocacola.png" alt="Logo Coca-Cola" className="logo-img" loading="eager" />
        </a>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              aria-label={link.ariaLabel}
              data-hover={link.label}
              onClick={handleLinkClick}
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;

