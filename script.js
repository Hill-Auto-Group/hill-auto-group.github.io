// EmailJS initialization
(function() {
    emailjs.init("d-PdqAXOBZzdI0wHP"); // Replace with your actual public key
})();

// EmailJS form submission function
function sendEmail(e) {
    e.preventDefault();
    
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = {
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        dealership: form.querySelector('select[name="dealership"]').value,
        message: form.querySelector('textarea[name="message"]').value
    };
    
    // Send email using EmailJS
    emailjs.send('service_dtfbsnl', '65854vk', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        })
        .finally(function() {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    
    return false;
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality - MOVED TO TOP
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
        z-index: 1001;
    `;

    // Add the toggle button to navigation
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(mobileMenuToggle);
    }

    // Mobile menu functionality
    let mobileMenuOpen = false;

    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const navMenu = document.querySelector('.nav-menu');
        const navItems = navMenu.querySelectorAll('li');
        
        mobileMenuOpen = !mobileMenuOpen;
        
        if (mobileMenuOpen) {
            // Set up menu container
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(26, 26, 26, 0.98)';
            navMenu.style.padding = '1rem 0';
            navMenu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            navMenu.style.gap = '0';
            navMenu.style.opacity = '0';
            navMenu.style.transform = 'translateY(-10px)';
            navMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
            // Hide all nav items initially
            navItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-10px)';
                item.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
            });
            
            // Animate menu container
            setTimeout(() => {
                navMenu.style.opacity = '1';
                navMenu.style.transform = 'translateY(0)';
            }, 10);
            
            // Animate nav items with staggered delay
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100 + (index * 80)); // 80ms delay between each item
            });
            
            // Change icon to X
            this.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            // Animate out - reverse order
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-10px)';
                }, index * 40); // 40ms delay for faster close
            });
            
            // Hide menu container after items fade out
            setTimeout(() => {
                navMenu.style.opacity = '0';
                navMenu.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    navMenu.style.display = 'none';
                }, 200);
            }, navItems.length * 40 + 50);
            
            // Change icon back to hamburger
            this.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu if open with animation
            if (window.innerWidth <= 768 && mobileMenuOpen) {
                const navMenu = document.querySelector('.nav-menu');
                const navItems = navMenu.querySelectorAll('li');
                
                // Quick fade out animation
                navItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(-10px)';
                    }, index * 30); // Faster close animation
                });
                
                setTimeout(() => {
                    navMenu.style.opacity = '0';
                    navMenu.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        navMenu.style.display = 'none';
                    }, 150);
                }, navItems.length * 30 + 50);
                
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuOpen = false;
            }
            
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

    // Handle window resize
    function handleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
            // Reset menu state on resize
            if (!mobileMenuOpen) {
                navMenu.style.display = 'none';
            }
        } else {
            mobileMenuToggle.style.display = 'none';
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'row';
            navMenu.style.position = 'static';
            navMenu.style.width = 'auto';
            navMenu.style.background = 'none';
            navMenu.style.padding = '0';
            navMenu.style.boxShadow = 'none';
            navMenu.style.gap = '2rem';
            mobileMenuOpen = false;
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }

    // Initialize on load and handle resize
    handleMobileMenu();
    window.addEventListener('resize', handleMobileMenu);

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.nav-menu');
        if (mobileMenuOpen && !navContainer.contains(e.target)) {
            const navItems = navMenu.querySelectorAll('li');
            
            // Quick fade out animation
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-10px)';
                }, index * 30);
            });
            
            setTimeout(() => {
                navMenu.style.opacity = '0';
                navMenu.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    navMenu.style.display = 'none';
                }, 150);
            }, navItems.length * 30 + 50);
            
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuOpen = false;
        }
    });
});