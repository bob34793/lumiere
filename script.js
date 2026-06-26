document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Parallax effect for images
    const parallaxImages = document.querySelectorAll('.parallax .hero-image, .parallax-subtle img');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        parallaxImages.forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            // Check if element is in viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const speed = img.closest('.parallax-subtle') ? 0.05 : 0.15;
                // Calculate movement based on scroll position relative to the element
                const yPos = (rect.top - windowHeight / 2) * speed;
                img.style.transform = `translateY(${yPos}px)`;
            }
        });
    });

    // Initial trigger for elements already in view
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);

});
