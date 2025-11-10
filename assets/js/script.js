/**
 * ============================================
 * COCA-COLA - SITE VITRINE
 * JavaScript Modular e Otimizado
 * ============================================
 */

// ===== REGISTRO DO SCROLLTRIGGER =====
gsap.registerPlugin(ScrollTrigger);

// ===== MENU HAMBÚRGUER =====
(function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !navMenu) return;
    
    // Toggle do menu
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
})();

// ===== SCROLL SUAVE =====
(function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Ignorar links vazios
            if (href === '#' || !href) return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// ===== BOTÃO VOLTAR AO TOPO =====
(function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll suave ao topo
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// ===== ANIMAÇÕES DE ENTRADA (SCROLL REVEAL) =====
(function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos com classe fade-up
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
    
    // Adicionar classe fade-up dinamicamente aos elementos principais
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Excluir .historia-content da animação
        const children = section.querySelectorAll('h2, h3, p, .card');
        children.forEach((child, index) => {
            // Pular elementos dentro de .historia-content
            if (!child.closest('.historia-content')) {
                child.classList.add('fade-up');
                child.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(child);
            }
        });
    });
})();

// ===== CARROSSEL DE PRODUTOS =====
(function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const cards = track.querySelectorAll('.card');
    const totalCards = cards.length;
    
    // Função para atualizar posição do carrossel
    function updateCarousel() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Atualizar indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-selected', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.setAttribute('aria-selected', 'false');
            }
        });
    }
    
    // Botão anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    });
    
    // Botão próximo
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    });
    
    // Indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Navegação por teclado
    track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        }
    });
    
    // Inicializar
    updateCarousel();
})();

// ===== ANIMAÇÕES GSAP (HERO E HISTÓRIA) =====
(function initGSAPAnimations() {
    // Animação do hero ao carregar
    gsap.from('.hero-title', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-bottle', {
        duration: 1.5,
        opacity: 0,
        scale: 0.5,
        delay: 0.3,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.8,
        ease: 'power2.out'
    });
    
    // Animação da seção história com scroll
    const historiaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.historia-section',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            markers: false
        }
    });
    
    historiaTimeline.from('.historia-image', {
        opacity: 0,
        scale: 0.6,
        y: 50,
        rotation: -15,
        duration: 1.2,
        ease: 'back.out(1.7)'
    });
    
    historiaTimeline.from('.historia-visual svg', {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
        duration: 1
    }, '-=0.8');
    
    // Animação dos cards de produtos
    gsap.utils.toArray('.card').forEach((card, index) => {
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
})();

// ===== PAGE LOADER =====
(function initPageLoader() {
    const pageLoader = document.getElementById('pageLoader');
    
    if (!pageLoader) return;
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 800);
    });
})();

// ===== INDICADOR DE SEÇÃO ATIVA NO MENU =====
(function initActiveSectionIndicator() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    if (!navLinks.length || !sections.length) return;
    
    function updateActiveLink() {
        const scrollY = window.pageYOffset;
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', () => {
        updateActiveLink();
    }, { passive: true });
    
    // Atualizar ao carregar
    updateActiveLink();
})();

// ===== VALIDAÇÃO DE FORMULÁRIO =====
(function initFormValidation() {
    const form = document.getElementById('contatoForm');
    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('formFeedback');
    
    if (!form || !submitBtn) return;
    
    const fields = {
        nome: {
            element: document.getElementById('nome'),
            error: document.getElementById('nome-error'),
            validate: (value) => {
                if (!value.trim()) return 'Nome é obrigatório';
                if (value.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres';
                return '';
            }
        },
        email: {
            element: document.getElementById('email'),
            error: document.getElementById('email-error'),
            validate: (value) => {
                if (!value.trim()) return 'Email é obrigatório';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Email inválido';
                return '';
            }
        },
        mensagem: {
            element: document.getElementById('mensagem'),
            error: document.getElementById('mensagem-error'),
            validate: (value) => {
                if (!value.trim()) return 'Mensagem é obrigatória';
                if (value.trim().length < 10) return 'Mensagem deve ter pelo menos 10 caracteres';
                return '';
            }
        }
    };
    
    // Validação em tempo real
    Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (!field.element || !field.error) return;
        
        field.element.addEventListener('blur', () => {
            validateField(key);
        });
        
        field.element.addEventListener('input', () => {
            if (field.error.classList.contains('show')) {
                validateField(key);
            }
        });
    });
    
    function validateField(fieldName) {
        const field = fields[fieldName];
        if (!field) return false;
        
        const value = field.element.value;
        const error = field.validate(value);
        
        if (error) {
            field.error.textContent = error;
            field.error.classList.add('show');
            field.element.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            field.error.textContent = '';
            field.error.classList.remove('show');
            field.element.setAttribute('aria-invalid', 'false');
            return true;
        }
    }
    
    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = `form-feedback ${type} show`;
        
        if (type === 'success') {
            form.reset();
            Object.keys(fields).forEach(key => {
                const field = fields[key];
                if (field.error) {
                    field.error.classList.remove('show');
                    field.error.textContent = '';
                }
                if (field.element) {
                    field.element.setAttribute('aria-invalid', 'false');
                }
            });
        }
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validar todos os campos
        let isValid = true;
        Object.keys(fields).forEach(key => {
            if (!validateField(key)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showFeedback('Por favor, corrija os erros no formulário.', 'error');
            return;
        }
        
        // Desabilitar botão e mostrar loading
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        feedback.classList.remove('show');
        
        // Simular envio (substitua por chamada real de API)
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            showFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Focar no feedback para acessibilidade
            feedback.focus();
        } catch (error) {
            showFeedback('Erro ao enviar mensagem. Tente novamente mais tarde.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
})();

// ===== SCROLL PROGRESS INDICATOR =====
(function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    const progressContainer = document.getElementById('scrollProgress');
    
    if (!progressBar || !progressContainer) return;
    
    function updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
        progressContainer.setAttribute('aria-valuenow', Math.round(scrolled));
    }
    
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
})();

// ===== PARTÍCULAS ANIMADAS =====
(function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    
    if (!canvas || window.innerWidth < 769) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(228, 26, 28, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Conectar partículas próximas
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(228, 26, 28, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
})();

// ===== RIPPLE EFFECT NOS BOTÕES =====
(function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = this.querySelector('.btn-ripple');
            if (!ripple) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            ripple.style.animation = 'none';
            setTimeout(() => {
                ripple.style.animation = 'ripple 0.6s ease-out';
            }, 10);
        });
    });
})();

// ===== MELHORIAS DE PERFORMANCE =====
(function initPerformanceOptimizations() {
    // Lazy loading de imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Debounce para eventos de scroll
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Otimizar scroll events
    const optimizedScrollHandler = debounce(() => {
        // Lógica de scroll otimizada aqui se necessário
    }, 10);
    
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
})();

// ===== ACESSIBILIDADE =====
(function initAccessibility() {
    // Focar no primeiro elemento interativo ao abrir menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                const firstLink = navMenu.querySelector('.nav-link');
                if (firstLink) {
                    setTimeout(() => firstLink.focus(), 100);
                }
            }
        });
    }
    
    // Prevenir foco em elementos decorativos
    document.querySelectorAll('[aria-hidden="true"]').forEach(el => {
        el.setAttribute('tabindex', '-1');
    });
    
    // Melhorar navegação por teclado no carrossel
    const carouselCards = document.querySelectorAll('.card');
    carouselCards.forEach(card => {
        card.setAttribute('tabindex', '0');
    });
})();

// ===== INICIALIZAÇÃO GERAL =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Site Coca-Cola carregado com sucesso!');
    
    // Adicionar classe loaded ao body para animações de entrada
    document.body.classList.add('loaded');
    
    // Verificar se todas as funcionalidades estão funcionando
    const checks = {
        menu: !!document.getElementById('menuToggle'),
        carousel: !!document.getElementById('carouselTrack'),
        backToTop: !!document.getElementById('backToTop'),
        form: !!document.getElementById('contatoForm'),
        particles: !!document.getElementById('particlesCanvas')
    };
    
    if (Object.values(checks).every(v => v)) {
        console.log('✅ Todas as funcionalidades inicializadas');
    }
});

