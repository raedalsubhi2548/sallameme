// Smooth scroll (بس إذا العنصر موجود)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Cart & Rocket (آمن حتى لو العناصر غير موجودة)
let cart = 0;

window.addToCart = function addToCart() {
  cart++;
  const counter = document.getElementById("cartCount");
  if (counter) counter.textContent = String(cart);

  const rocket = document.getElementById("rocket");
  if (rocket) {
    rocket.classList.add("animate");
    setTimeout(() => rocket.classList.remove("animate"), 2000);
  }
};

// Header scroll (آمن)
window.addEventListener("scroll", () => {
  const header = document.querySelector(".space-header");
  if (!header) return;
  header.style.background =
    window.scrollY > 50 ? "rgba(11, 19, 43, 0.95)" : "rgba(11, 19, 43, 0.8)";
});
