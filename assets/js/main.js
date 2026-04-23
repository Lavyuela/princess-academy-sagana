// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Header shadow on scroll
const header = document.getElementById('siteHeader');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form demo handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    if (status) {
      status.textContent = 'Thank you! Your message has been received. We will respond shortly.';
      status.style.color = '#118ab2';
    }
    contactForm.reset();
  });
}
