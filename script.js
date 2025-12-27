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
// Certificate Flip Cards - CRITICAL FIX
// =====================
document.addEventListener('DOMContentLoaded', function() {
  initCertificateCards();
});

function initCertificateCards() {
  const certificateCards = document.querySelectorAll('.certificate-card:not(.coming-soon)');
  
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
    
    // 2. Click ANY element with class '.flip-back-btn' to UNFLIP (BACK -> FRONT)
    // Using event delegation on the card itself
    card.addEventListener('click', function(e) {
      if (e.target.closest('.flip-back-btn')) {
        e.stopPropagation();
        e.preventDefault();
        card.classList.remove('flipped');
      }
    });
    
    // 3. Click outside the flipped card to close it
    document.addEventListener('click', function(e) {
      if (!card.contains(e.target) && card.classList.contains('flipped')) {
        card.classList.remove('flipped');
      }
    });
    
    // 4. Remove the hover effect that conflicts with the flip animation
    // We'll handle hover purely with CSS later
    
    // Mark as initialized
    card.dataset.initialized = 'true';
  });
  
  // Coming soon card animation
  const comingSoonCard = document.querySelector('.coming-soon');
  if (comingSoonCard && !comingSoonCard.dataset.initialized) {
    comingSoonCard.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
    comingSoonCard.dataset.initialized = 'true';
  }
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
