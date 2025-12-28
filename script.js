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
// Certificate Flip Cards - IMPROVED (Click outside to flip back)
// =====================
document.addEventListener('DOMContentLoaded', function() {
  initCertificateCards();
});

function initCertificateCards() {
  const certificateCards = document.querySelectorAll('.certificate-card');
  let activeCard = null; // Track which card is currently flipped
  
  certificateCards.forEach(card => {
    // Skip if already initialized
    if (card.dataset.initialized) return;
    
    const viewMoreBtn = card.querySelector('.view-more-btn');
    const viewCertBtn = card.querySelector('.view-certificate-btn');
    
    if (!viewMoreBtn) return;
    
    // 1. Click "View Details" to FLIP CARD (FRONT -> BACK)
    viewMoreBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      
      // Close any other open card first
      if (activeCard && activeCard !== card) {
        activeCard.classList.remove('flipped');
      }
      
      // Open this card
      card.classList.add('flipped');
      activeCard = card;
    });
    
    // 2. Click ANYWHERE inside the card to UNFLIP (except the "View Certificate" link)
    card.addEventListener('click', function(e) {
      // Only flip back if we're on the back side AND not clicking the View Certificate link
      if (card.classList.contains('flipped') && !e.target.closest('.view-certificate-btn')) {
        card.classList.remove('flipped');
        activeCard = null;
      }
    });
    
    // 3. Prevent clicks inside card from bubbling to document
    card.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Mark as initialized
    card.dataset.initialized = 'true';
  });
  
  // 4. CLICK ANYWHERE OUTSIDE THE CARD TO FLIP BACK
  document.addEventListener('click', function(e) {
    // If there's an active (flipped) card AND we're clicking outside it
    if (activeCard && !activeCard.contains(e.target)) {
      activeCard.classList.remove('flipped');
      activeCard = null;
    }
  });
  
  // 5. Also flip back when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeCard) {
      activeCard.classList.remove('flipped');
      activeCard = null;
    }
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

// =====================
// Certificate Carousel Navigation
// =====================
document.addEventListener('DOMContentLoaded', function() {
  initCertificateCarousel();
});

function initCertificateCarousel() {
  const track = document.querySelector('.certificates-track');
  const leftArrow = document.querySelector('.carousel-arrow.left');
  const rightArrow = document.querySelector('.carousel-arrow.right');
  const certificateCards = document.querySelectorAll('.certificate-card');
  
  if (!track || !leftArrow || !rightArrow) return;
  
  const cardWidth = certificateCards[0]?.offsetWidth || 380;
  const gap = 30;
  const scrollAmount = cardWidth + gap;
  
  // Update arrow states
  function updateArrows() {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    
    leftArrow.disabled = scrollLeft <= 0;
    rightArrow.disabled = scrollLeft >= maxScroll - 10; // Small buffer
    
    if (leftArrow.disabled) {
      leftArrow.style.opacity = '0.5';
      leftArrow.style.cursor = 'not-allowed';
    } else {
      leftArrow.style.opacity = '1';
      leftArrow.style.cursor = 'pointer';
    }
    
    if (rightArrow.disabled) {
      rightArrow.style.opacity = '0.5';
      rightArrow.style.cursor = 'not-allowed';
    } else {
      rightArrow.style.opacity = '1';
      rightArrow.style.cursor = 'pointer';
    }
  }
  
  // Scroll left
  leftArrow.addEventListener('click', function() {
    if (this.disabled) return;
    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
    setTimeout(updateArrows, 300);
  });
  
  // Scroll right
  rightArrow.addEventListener('click', function() {
    if (this.disabled) return;
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    setTimeout(updateArrows, 300);
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      leftArrow.click();
    } else if (e.key === 'ArrowRight') {
      rightArrow.click();
    }
  });
  
  // Update on scroll
  track.addEventListener('scroll', updateArrows);
  
  // Update on resize
  window.addEventListener('resize', updateArrows);
  
  // Initial update
  updateArrows();
}
