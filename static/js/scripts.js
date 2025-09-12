// Shared JavaScript for portfolio website

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle'); // Desktop header toggle
const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle'); // Mobile fixed nav toggle

const applyDarkMode = (isDark) => {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.classList.add('dark');
    } else {
        document.body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.classList.remove('dark');
    }
};

// Apply saved dark mode preference on load
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(savedDarkMode);
});

// Event listener for desktop dark mode toggle
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        applyDarkMode(!isCurrentlyDark);
        localStorage.setItem('darkMode', !isCurrentlyDark);
    });
}

// Event listener for mobile dark mode toggle
if (mobileDarkModeToggle) {
    mobileDarkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        applyDarkMode(!isCurrentlyDark);
        localStorage.setItem('darkMode', !isCurrentlyDark);
    });
}


// Smooth scrolling for internal anchor links (excluding multi-page navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const currentFileName = window.location.pathname.split("/").pop();
        if (currentFileName === "index.html" || currentFileName === "" || currentFileName === "education-achievements.html") {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Intersection Observer for fade-in effect
const fadeInSections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.01
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // observer.unobserve(entry.target); // Uncomment to animate only once
        } else {
            // entry.target.classList.remove('is-visible'); // Uncomment to re-animate on scroll
        }
    });
}, observerOptions);
fadeInSections.forEach(section => {
    observer.observe(section);
});

// Highlight active navigation link based on current page
const setActiveNav = () => {
    const path = window.location.pathname.split("/").pop(); // Get filename
    const desktopNavLinks = document.querySelectorAll('#navLinksDesktop a');
    const mobileNavItems = document.querySelectorAll('#mobileFixedNav .nav-item'); // New selector for mobile

    [...desktopNavLinks, ...mobileNavItems].forEach(link => {
        link.classList.remove('active'); // For desktop nav links
        link.classList.remove('active-nav-link'); // For mobile nav items

        let linkPath = link.getAttribute('href');
        if (linkPath) { // Check if href exists
            linkPath = linkPath.split("/").pop();

            if (linkPath === path || (path === "" && linkPath === "index.html")) {
                link.classList.add('active'); // Applies to both desktop and mobile for consistent styling
                link.classList.add('active-nav-link'); // Specific for mobile bottom nav
            }
        }
    });
};
document.addEventListener('DOMContentLoaded', setActiveNav); // Run on page load


// Scroll to Top Button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});