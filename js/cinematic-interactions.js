// ===== CINEMATIC INTERACTIONS & ANIMATIONS =====

class CinematicExperience {
  constructor() {
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupScrollEffects();
    this.setupNavigation();
    this.setupPortfolioCarousel();
    this.setupParallax();
    this.setupThemeToggle();
    this.setupMobileMenu();
    this.setupSmoothScrolling();
    this.setupLoadingStates();
    this.setupMicroInteractions();
  }

  // Intersection Observer for scroll animations
  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('observed');
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right, .stagger-item').forEach(el => {
      observer.observe(el);
    });

    // Observe elements with observe- classes
    document.querySelectorAll('[class*="observe-"]').forEach(el => {
      observer.observe(el);
    });
  }

  // Scroll effects for navigation
  setupScrollEffects() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar-cinematic');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add/remove scrolled class
      if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', this.throttle(handleScroll, 16));
  }

  // Navigation interactions
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link-cinematic');
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        this.addGlowEffect(e.target);
      });

      link.addEventListener('mouseleave', (e) => {
        this.removeGlowEffect(e.target);
      });
    });
  }

  // Portfolio carousel functionality
  setupPortfolioCarousel() {
    const carousels = document.querySelectorAll('.content-carousel');
    
    carousels.forEach(carousel => {
      const scrollLeft = carousel.parentElement.querySelector('.scroll-left');
      const scrollRight = carousel.parentElement.querySelector('.scroll-right');
      
      if (scrollLeft && scrollRight) {
        scrollLeft.addEventListener('click', () => {
          this.scrollCarousel(carousel, 'left');
        });

        scrollRight.addEventListener('click', () => {
          this.scrollCarousel(carousel, 'right');
        });

        // Update button states
        carousel.addEventListener('scroll', () => {
          this.updateCarouselButtons(carousel, scrollLeft, scrollRight);
        });

        // Initial button state
        this.updateCarouselButtons(carousel, scrollLeft, scrollRight);
      }
    });
  }

  scrollCarousel(carousel, direction) {
    const scrollAmount = 340; // Card width + gap
    const currentScroll = carousel.scrollLeft;
    
    if (direction === 'left') {
      carousel.scrollTo({
        left: Math.max(0, currentScroll - scrollAmount),
        behavior: 'smooth'
      });
    } else {
      carousel.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  updateCarouselButtons(carousel, leftBtn, rightBtn) {
    const isAtStart = carousel.scrollLeft <= 0;
    const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth;

    leftBtn.disabled = isAtStart;
    rightBtn.disabled = isAtEnd;
  }

  // Parallax effects
  setupParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.classList.contains('parallax-slow') ? 0.5 : 
                     element.classList.contains('parallax-medium') ? 0.3 : 0.15;
        const yPos = -(scrolled * speed);
        
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', this.throttle(handleParallax, 16));
  }

  // Theme toggle
  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeIconDark = document.getElementById('theme-icon-dark');
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        
        // Update icons
        if (document.documentElement.classList.contains('dark')) {
          themeIcon.classList.add('hidden');
          themeIconDark.classList.remove('hidden');
        } else {
          themeIcon.classList.remove('hidden');
          themeIconDark.classList.add('hidden');
        }

        // Save preference
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      });

      // Load saved preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        themeIcon.classList.add('hidden');
        themeIconDark.classList.remove('hidden');
      }
    }
  }

  // Mobile menu
  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu-cinematic');
    
    if (mobileMenuBtn && navMenu) {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      document.body.appendChild(overlay);

      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('active');
        
        if (isOpen) {
          this.closeMobileMenu(navMenu, overlay, mobileMenuBtn);
        } else {
          this.openMobileMenu(navMenu, overlay, mobileMenuBtn);
        }
      });

      overlay.addEventListener('click', () => {
        this.closeMobileMenu(navMenu, overlay, mobileMenuBtn);
      });

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
          this.closeMobileMenu(navMenu, overlay, mobileMenuBtn);
        }
      });
    }
  }

  openMobileMenu(navMenu, overlay, button) {
    navMenu.classList.add('active');
    overlay.classList.add('active');
    button.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu(navMenu, overlay, button) {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    button.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Smooth scrolling
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          // Update active nav link
          this.updateActiveNavLink(targetId);
        }
      });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', this.throttle(() => {
      this.updateActiveNavLinkOnScroll();
    }, 100));
  }

  updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-link-cinematic').forEach(link => {
      link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.nav-link-cinematic[href="${targetId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        this.updateActiveNavLink(`#${id}`);
      }
    });
  }

  // Loading states
  setupLoadingStates() {
    // Add loading states to buttons on click
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', (e) => {
        if (!button.classList.contains('loading')) {
          this.addLoadingState(button);
        }
      });
    });
  }

  addLoadingState(element) {
    element.classList.add('loading');
    element.disabled = true;

    // Remove loading state after 2 seconds (simulate action)
    setTimeout(() => {
      element.classList.remove('loading');
      element.disabled = false;
    }, 2000);
  }

  // Micro-interactions
  setupMicroInteractions() {
    // Card hover effects
    document.querySelectorAll('.interactive-card').forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        this.addCardHoverEffect(e.target);
      });

      card.addEventListener('mouseleave', (e) => {
        this.removeCardHoverEffect(e.target);
      });
    });

    // Button ripple effect
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', (e) => {
        this.createRippleEffect(e);
      });
    });

    // Form interactions
    this.setupFormInteractions();
  }

  addCardHoverEffect(card) {
    card.style.transform = 'translateY(-8px) scale(1.02)';
    card.style.boxShadow = 'var(--shadow-xl), var(--shadow-glow-red)';
  }

  removeCardHoverEffect(card) {
    card.style.transform = '';
    card.style.boxShadow = '';
  }

  createRippleEffect(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  setupFormInteractions() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
      });

      input.addEventListener('blur', (e) => {
        if (!e.target.value) {
          e.target.parentElement.classList.remove('focused');
        }
      });
    });
  }

  // Utility functions
  addGlowEffect(element) {
    element.style.boxShadow = 'var(--shadow-glow-red)';
    element.style.borderColor = 'var(--accent-red)';
  }

  removeGlowEffect(element) {
    element.style.boxShadow = '';
    element.style.borderColor = '';
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  debounce(func, wait) {
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
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CinematicExperience();
});

// Add CSS for ripple effect
const rippleStyles = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .btn {
    position: relative;
    overflow: hidden;
  }

  .focused {
    border-color: var(--accent-red) !important;
    box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.2);
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);
