// Main JavaScript for Swarajh Mehta's Personal Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();

                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Projects TOC toggle for mobile
    const tocToggle = document.getElementById('toc-toggle');
    const projectsToc = document.getElementById('projects-toc');

    if (tocToggle && projectsToc) {
        tocToggle.addEventListener('click', function() {
            tocToggle.classList.toggle('active');
            projectsToc.classList.toggle('show');
        });
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Send email using EmailJS
            emailjs.send(config.emailjs.serviceId, config.emailjs.templateId, {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'swarajhmehta1@gmail.com'
            })
            .then(function() {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            })
            .catch(function(error) {
                alert('Sorry, there was an error sending your message. Please try again later.');
                console.error('EmailJS error:', error);
            })
            .finally(function() {
                // Reset button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
    
    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-slide-left, .animate-slide-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        
        if (element.classList.contains('animate-slide-up')) {
            element.style.transform = 'translateY(50px)';
        } else if (element.classList.contains('animate-slide-left')) {
            element.style.transform = 'translateX(-50px)';
        } else if (element.classList.contains('animate-slide-right')) {
            element.style.transform = 'translateX(50px)';
        }
        
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        observer.observe(element);
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.parentElement.querySelector('.carousel-button.next');
    const prevButton = carousel.parentElement.querySelector('.carousel-button.prev');
    const dotsContainer = carousel.parentElement.querySelector('.carousel-dots');

    let currentIndex = 0;
    
    // Initialize carousel
    function initializeCarousel() {
        const slideWidth = carousel.offsetWidth;
        
        // Set initial positions
        slides.forEach((slide, index) => {
            slide.style.position = 'absolute';
            slide.style.left = `${index * 100}%`;
            slide.style.width = '100%';
        });
        
        track.style.position = 'relative';
        track.style.width = `${slides.length * 100}%`;
        
        goToSlide(currentIndex);
    }

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    // Event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Initialize carousel on load
    window.addEventListener('load', initializeCarousel);

    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance when hovering over carousel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initializeCarousel();
        }, 250);
    });
});
