// Hamburger Menü Aç/Kapa
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Müşteri Yorumları Slider
const testimonialSlides = document.getElementById('testimonialSlides');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentSlide = 0;
if (testimonialSlides && prevBtn && nextBtn) {
  const totalSlides = testimonialSlides.children.length;
  function showSlide(idx) {
    testimonialSlides.style.transform = `translateX(-${idx * 100}%)`;
  }
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });
  showSlide(currentSlide);
}
