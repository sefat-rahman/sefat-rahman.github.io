// UI interactions
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      // Create mobile nav if it doesn't exist
      if (!document.querySelector('.mobile-nav')) {
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        
        // Clone the nav links
        const navLinksClone = navLinks.cloneNode(true);
        navLinksClone.style.display = 'flex';
        navLinksClone.style.flexDirection = 'column';
        navLinksClone.style.gap = '1.5rem';
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mobile-menu-close';
        closeBtn.setAttribute('aria-label', 'Close mobile menu');
        closeBtn.innerHTML = '<i data-lucide="x"></i>';
        
        // Add close button and nav links to mobile nav
        mobileNav.appendChild(closeBtn);
        mobileNav.appendChild(navLinksClone);
        
        // Add mobile nav to body
        body.appendChild(mobileNav);
        
        // Initialize icons in mobile nav
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: {
              class: 'mobile-menu-icon'
            }
          });
        }
        
        // Handle close button click
        closeBtn.addEventListener('click', () => {
          mobileNav.classList.remove('active');
          body.classList.remove('no-scroll');
          
          // Remove mobile nav after animation
          setTimeout(() => {
            body.removeChild(mobileNav);
          }, 300);
        });
        
        // Handle nav link clicks in mobile menu
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            body.classList.remove('no-scroll');
            
            // Remove mobile nav after animation
            setTimeout(() => {
              if (document.body.contains(mobileNav)) {
                body.removeChild(mobileNav);
              }
            }, 300);
          });
        });
        
        // Add active class after a slight delay to trigger animation
        setTimeout(() => {
          mobileNav.classList.add('active');
          body.classList.add('no-scroll');
        }, 10);
      } else {
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.add('active');
        body.classList.add('no-scroll');
      }
    });
  }
  
  // Smooth scroll for navigation links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get the navbar height to offset scrolling
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        
        // Calculate position to scroll to
        const offsetTop = targetElement.offsetTop - navbarHeight;
        
        // Smooth scroll to target
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Highlight active nav item on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
  
  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY;
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbarHeight - 20; // 20px offset for better UX
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navItems.forEach((navItem) => {
          if (navItem.getAttribute('href') === `#${sectionId}`) {
            navItem.classList.add('active');
          } else {
            navItem.classList.remove('active');
          }
        });
      }
    });
  }
  
  // Intersection Observer for animation triggers
  const animateElements = document.querySelectorAll('.stagger-children');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        animationObserver.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);
  
  animateElements.forEach(element => {
    animationObserver.observe(element);
  });
  
  // Add scroll event for nav highlighting
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // Initialize animations on page load
  setTimeout(() => {
    document.querySelector('.hero-content')?.classList.add('animate-fade-in');
  }, 100);
  
  // Initialize active nav item on page load
  highlightNavOnScroll();
  
  // Form submission handling (for contact form)
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // In a real implementation, you would send form data to a server
      // For now, just show a success message
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      console.log('Form submitted:', formValues);
      
      // Create success message
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success-message';
      successMessage.textContent = 'Thanks for your message! I will get back to you soon.';
      
      // Replace form with success message
      contactForm.innerHTML = '';
      contactForm.appendChild(successMessage);
    });
  }
}); 