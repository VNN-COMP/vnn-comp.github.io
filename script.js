// VNN-COMP Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });

    // Animate repository cards on scroll
    const repoCards = document.querySelectorAll('.repo-card');
    
    const repoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    repoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        repoObserver.observe(card);
    });

    // Add hover effects to statistics
    const stats = document.querySelectorAll('.stat');
    
    stats.forEach(stat => {
        const number = stat.querySelector('.stat-number');
        const originalNumber = number.textContent;
        
        stat.addEventListener('mouseenter', function() {
            if (originalNumber.includes('+')) {
                // Animate the number
                const baseNumber = parseInt(originalNumber.replace('+', ''));
                let current = 0;
                const increment = baseNumber / 20;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= baseNumber) {
                        number.textContent = originalNumber;
                        clearInterval(timer);
                    } else {
                        number.textContent = Math.floor(current) + '+';
                    }
                }, 50);
            }
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Press 'h' to go to top
        if (e.key === 'h' && !e.ctrlKey && !e.altKey) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Press 'c' to go to competitions
        if (e.key === 'c' && !e.ctrlKey && !e.altKey) {
            document.querySelector('#competitions').scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Press 'r' to go to repositories
        if (e.key === 'r' && !e.ctrlKey && !e.altKey) {
            document.querySelector('#repositories').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Add search functionality for repository years
    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search by year...';
        searchInput.style.cssText = `
            width: 100%;
            max-width: 300px;
            padding: 10px 15px;
            margin-bottom: 2rem;
            border: 2px solid #e2e8f0;
            border-radius: 25px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
        `;
        
        const repoSection = document.querySelector('#repositories .container');
        const repoGrid = document.querySelector('.repo-grid');
        
        repoSection.insertBefore(searchInput, repoGrid);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const repoCards = document.querySelectorAll('.repo-card');
            
            repoCards.forEach(card => {
                const year = card.querySelector('.repo-year').textContent.toLowerCase();
                if (year.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#667eea';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#e2e8f0';
        });
    }
    
    // Initialize search functionality
    addSearchFunctionality();

    console.log('VNN-COMP Website loaded successfully!');
});

// Add utility functions for potential future use
window.VNNComp = {
    scrollToSection: function(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    },
    
    highlightYear: function(year) {
        const yearCard = document.querySelector(`#repo-${year}`);
        if (yearCard) {
            yearCard.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            yearCard.style.color = 'white';
            
            setTimeout(() => {
                yearCard.style.background = 'white';
                yearCard.style.color = '#333';
            }, 2000);
        }
    }
};