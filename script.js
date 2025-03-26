  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');
  
  mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
  
  // Header Scroll Effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          if (nav.classList.contains('active')) {
              nav.classList.remove('active');
          }
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      });
  });
  
  // Intersection Observer for Scroll Animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              
              // For section titles with underline animation
              if (entry.target.classList.contains('section-title')) {
                  entry.target.querySelector('h2').classList.add('in-view');
              }
          }
      });
  }, observerOptions);
  
  // Observe all elements with animation classes
  document.querySelectorAll('.about-text, .about-image, .detail-card, .timeline, .timeline::after, .timeline-item, .registration-content, .footer-column, .category-card, .pricing-card').forEach(element => {
      observer.observe(element);
  });
  
  // Observe section titles separately for the underline animation
  document.querySelectorAll('.section-title').forEach(element => {
      observer.observe(element);
  });
  
  // Create floating particles for hero section
  function createParticles() {
      const particlesContainer = document.querySelector('.particles');
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          
          // Random size between 2px and 6px
          const size = Math.random() * 4 + 2;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          
          // Random position
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          
          // Random opacity
          particle.style.opacity = Math.random() * 0.5 + 0.1;
          
          // Random animation duration and delay
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;
          particle.style.animation = `particleAnimation ${duration}s linear ${delay}s infinite`;
          
          particlesContainer.appendChild(particle);
      }
  }
  
  // Initialize particles when DOM is loaded
  document.addEventListener('DOMContentLoaded', createParticles);
  
  // Hover effect for buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
          button.style.transform = 'translateY(-5px)';
          button.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
      });
      
      button.addEventListener('mouseleave', () => {
          button.style.transform = 'translateY(0)';
          button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
      });
  });
  
  // Pulse animation for important elements
  function addPulseAnimation() {
      const pulseElements = document.querySelectorAll('.btn:not(.btn-outline), .detail-card i, .section-title h2');
      
      pulseElements.forEach(el => {
          el.addEventListener('mouseenter', () => {
              el.style.animation = 'pulse 1.5s infinite';
          });
          
          el.addEventListener('mouseleave', () => {
              el.style.animation = 'none';
          });
      });
  }
  
  addPulseAnimation();