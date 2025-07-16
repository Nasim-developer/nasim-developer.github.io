document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#skills");
  const levels = document.querySelectorAll(".skill-level");

  function fillBars() {
    levels.forEach(el => {
      el.style.transition = "width 1.2s ease-in-out";
      el.style.width = el.dataset.level;
    });
  }

  function resetBars() {
    levels.forEach(el => {
      el.style.transition = "none";
      el.style.width = "0";
    });
  }

  // Fill bars on page load
  fillBars();

  // Intersection Observer for scroll-triggered animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fillBars();
      } else {
        resetBars();
      }
    });
  }, {
    threshold: 0.5,
  });

  observer.observe(skillsSection);
});
