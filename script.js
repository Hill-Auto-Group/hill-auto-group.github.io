// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(51, 51, 51, 0.95)';
        }
    });

    // Hero play button functionality
    const heroPlay = document.querySelector('.hero-play');
    const heroVideo = document.querySelector('.hero-background video');
    
    if (heroPlay && heroVideo) {
        heroPlay.addEventListener('click', function() {
            if (heroVideo.paused) {
                heroVideo.play();
                this.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                heroVideo.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
            }
            
            this.style.background = 'rgba(255, 255, 255, 0.4)';
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.2)';
            }, 200);
        });

        // Update play button icon based on video state
        heroVideo.addEventListener('play', function() {
            heroPlay.innerHTML = '<i class="fas fa-pause"></i>';
        });

        heroVideo.addEventListener('pause', function() {
            heroPlay.innerHTML = '<i class="fas fa-play"></i>';
        });
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const dealership = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;

            // Basic validation
            if (!name || !email || !dealership) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }

    // Dealership card interactions
    const dealershipCards = document.querySelectorAll('.dealership-card');
    dealershipCards.forEach(card => {
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const dealershipName = card.querySelector('h3').textContent;
                showNotification(`Redirecting to ${dealershipName}...`, 'info');
            });
        }
    });

    // Hero buttons functionality
    const findVehicleBtn = document.querySelector('.hero-buttons .btn-primary');
    const testDriveBtn = document.querySelector('.hero-buttons .btn-secondary');

    if (findVehicleBtn) {
        findVehicleBtn.addEventListener('click', function() {
            document.querySelector('#dealerships').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    if (testDriveBtn) {
        testDriveBtn.addEventListener('click', function() {
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.dealership-card, .about-text, .contact-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#0066cc'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;

        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;

        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Mobile menu toggle (for future implementation)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
    `;

    // Add mobile menu toggle for smaller screens
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(mobileMenuToggle);
        mobileMenuToggle.style.display = 'block';
    }

    // Responsive mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
        } else {
            mobileMenuToggle.style.display = 'none';
        }
    });
}); 