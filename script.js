// Floating background script - Web Design & Data Science focus
const texts = [
  // Greetings
  "hello",
  "salaam",
  "kumusta",
  "mabuhay",
  "hi",
  "hey",
  "howdy",
  "welcome",
  "selamat datang",
  "apa khabar",

  // Web Design & Development
  "web design",
  "UI/UX",
  "WordPress",
  "Elementor",
  "Figma",
  "CSS",
  "html",
  "javascript",
  "responsive",
  "SEO",
  "wireframes",
  "frontend",
  "rainmaker",

  // Data Science & Analytics
  "data science",
  "analytics",
  "python",
  "SQL",
  "R",
  "pandas",
  "machine learning",
  "big data",
  "insights",
  "algorithms",
  "statistics",
  "clean data"
];

// Word categories for distinct font styling
const greetings = [
  "hello", "salaam", "kumusta", "mabuhay", "hi", "hey", "howdy", "welcome", "selamat datang", "apa khabar"
];

const techCodeWords = [
  "CSS", "html", "javascript", "python", "SQL", "R", "pandas", "algorithms"
];

// Helper to assign different font classes for visual variety
function applyFontVariation(span, text) {
  if (greetings.includes(text)) {
    span.classList.add("handwriting"); // Cursive/casual for friendly greetings
  } else if (techCodeWords.includes(text)) {
    span.classList.add("tech-mono");   // Monospace style for coding/data tools
  } else {
    span.classList.add("clean-sans");   // Modern sans-serif for design & analytics terms
  }
}

function createFloatingText(initialLoad = false) {
  const container = document.getElementById("floatingBg");
  if (!container) return;

  const text = texts[Math.floor(Math.random() * texts.length)];
  const span = document.createElement("span");

  span.textContent = text;
  span.className = "floating-text";

  // Apply font class based on word context
  applyFontVariation(span, text);

  // Random position across entire screen
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  span.style.left = `${startX}%`;
  span.style.top = `${startY}%`;

  // Random animation duration (slower = more peaceful)
  const duration = 18 + Math.random() * 22; // 18-40 seconds
  span.style.animationDuration = `${duration}s`;

  // Random horizontal drift
  const drift = -100 + Math.random() * 200; // -100px to +100px drift
  span.style.setProperty("--float-x", `${drift}px`);

  // Random font size variation (14px - 26px)
  const size = 14 + Math.random() * 12;
  span.style.fontSize = `${size}px`;

  // Random rotation amount
  const rotationAmount = -180 + Math.random() * 360;
  span.style.setProperty("--float-rotate-amount", `${rotationAmount}deg`);

  // Randomly choose animation style
  const animationType = Math.random();
  if (animationType > 0.6) {
    span.classList.add("sideways");
    const endX = -100 + Math.random() * window.innerWidth;
    span.style.setProperty("--float-end-x", `${endX}px`);
  } else if (animationType > 0.3) {
    span.classList.add("diagonal");
  }

  // For initial load, use a random starting scale
  if (initialLoad) {
    const startScale = 0.3 + Math.random() * 0.5;
    span.style.setProperty("--start-scale", startScale);
    span.classList.add("initial");
  }

  // Random delay before starting
  const delay = initialLoad ? 0 : Math.random() * 5;
  span.style.animationDelay = `${delay}s`;

  container.appendChild(span);

  // Remove element after animation completes
  setTimeout(() => {
    span.remove();
  }, (duration + delay) * 1000);
}

// Create initial floating texts distributed across screen
function initFloatingTexts() {
  const initialCount = 50; // Number of texts to start with
  for (let i = 0; i < initialCount; i++) {
    setTimeout(() => {
      createFloatingText(true); // Pass true for initial load
    }, i * 80); // Stagger initial creation
  }
}

// Continuously create new floating texts
function startFloatingAnimation() {
  initFloatingTexts();

  // Add new text every 1-2.5 seconds
  setInterval(() => {
    createFloatingText();
  }, 1000 + Math.random() * 1500);
}

// Start when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startFloatingAnimation);
} else {
  startFloatingAnimation();
}

// Adjust animation on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const container = document.getElementById("floatingBg");
    if (!container) return;
    const existingTexts = container.querySelectorAll(".floating-text");
    existingTexts.forEach((text) => text.remove());
    initFloatingTexts();
  }, 250);
});