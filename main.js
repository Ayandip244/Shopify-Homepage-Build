// Header scroll shadow
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// Scent chips
document.querySelectorAll('.scent-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.scent-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});
