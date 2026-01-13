// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetSel = this.getAttribute('href');
    const target = document.querySelector(targetSel);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Cart counter + Rocket animation
let cart = 0;

window.addToCart = function addToCart() {
  cart += 1;

  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) cartCountEl.textContent = String(cart);

  const rocket = document.getElementById('rocket');
  if (rocket) {
    rocket.classList.add('animate');
    setTimeout(() => rocket.classList.remove('animate'), 2000);
  }
};

// Header background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.space-header');
  if (!header) return;

  header.style.background =
    window.scrollY > 50 ? 'rgba(11, 19, 43, 0.95)' : 'rgba(11, 19, 43, 0.8)';
});
