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
  strings: ["Industrial Automation ddd & IIoT Engineer"],
  typeSpeed: 50,       // speed of typing
  backSpeed: 25,       // speed of backspace
  startDelay: 1500,    // delay in ms before typing starts (1 second)
   loop: false,   // type once and stay
  showCursor: false  // optional: hide blinking cursor
});

// =====================
// Particles.js background
// =====================
particlesJS('particles-js',
  {
    "particles": {
      "number": { "value": 80 },
      "size": { "value": 3 },
      "move": { "speed": 1 },
      "line_linked": { "enable": true }
    }
  }
);

// =====================
// Animate skill bars when section visible
// =====================
const skills = document.querySelectorAll('.skill-fill');
const skillsSection = document.getElementById('skills');

function fillSkills() {
  skills.forEach(skill => {
    const width = skill.style.width;
    skill.style.width = width;
  });
}

window.addEventListener('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if(sectionPos < screenPos) fillSkills();
});

// =====================
// Initialize AOS library
// =====================
AOS.init({
  duration: 1000,
  once: true
});
