// =====================
// Smooth scrolling
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =====================
// Dark mode toggle
// =====================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// =====================
// Typed.js for hero
// =====================
var typed = new Typed('#typed', {
  strings: ["Industrial Automation - IIoT Engineer"],
  typeSpeed: 50,
  backSpeed: 25,
  startDelay: 1500,
  backDelay: 3000,
  loop: true,
  showCursor: true,
  fadeOut: true
});

// =====================
// Particles.js background
// =====================
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "move": { "speed": 1 },
    "line_linked": { "enable": true }
  }
});

// =====================
// Animate skill and language bars
// =====================
const skills = document.querySelectorAll('.skill-fill');
const skillsSection = document.getElementById('skills');
const langs = document.querySelectorAll('.lang-bar span');
const langsSection = document.getElementById('languages');

function fillBars() {
  skills.forEach(skill => {
    skill.style.width = skill.getAttribute('data-width');
  });
  langs.forEach(lang => {
    lang.style.width = lang.getAttribute('data-level');
  });
}

window.addEventListener('scroll', () => {
  const skillsPos = skillsSection.getBoundingClientRect().top;
  const langsPos = langsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if(skillsPos < screenPos || langsPos < screenPos) fillBars();
});

// =====================
// Initialize AOS
// =====================
AOS.init({
  duration: 1000,
  once: true
});

// =====================
// Hamburger toggle
// =====================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// =====================
// Certificate Flip Cards - IMPROVED
// =====================
document.addEventListener('DOMContentLoaded', function() {
  initCertificateCards();
});

function initCertificateCards() {
  const certificateCards = document.querySelectorAll('.certificate-card');
  
  certificateCards.forEach(card => {
    // Skip if already initialized
    if (card.dataset.initialized) return;
    
    const viewMoreBtn = card.querySelector('.view-more-btn');
    const inner = card.querySelector('.certificate-inner');
    
    // Only need the front button to initialize
    if (!viewMoreBtn || !inner) return;
    
    // 1. Click "View Details" to FLIP CARD (FRONT -> BACK)
    viewMoreBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      card.classList.add('flipped');
    });
    
    // 2. Click ANYWHERE on the card to UNFLIP (BACK -> FRONT)
    card.addEventListener('click', function(e) {
      // Only flip back if we're on the back side (flipped state)
      if (card.classList.contains('flipped')) {
        // Don't flip back if clicking on the "View Certificate" link
        if (e.target.closest('.view-certificate-btn')) {
          return; // Let the link work normally
        }
        card.classList.remove('flipped');
      }
    });
    
    // Mark as initialized
    card.dataset.initialized = 'true';
  });
}

// =====================
// Close mobile menu when clicking a link
// =====================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
    }
  });
});

// =====================
// Add loading animation
// =====================
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  const skillsPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (skillsPos < screenPos) {
    fillBars();
  }
});
