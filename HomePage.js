document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let index = 0;
  let interval;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function showNext() {
    index = (index + 1) % items.length;
    updateCarousel();
  }

  function showPrev() {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
  }

  function startAutoSlide() {
    interval = setInterval(showNext, 3500);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  prevBtn.addEventListener('click', () => {
    showPrev();
    stopAutoSlide();
    startAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    showNext();
    stopAutoSlide();
    startAutoSlide();
  });

  // Mulai auto-slide saat halaman dimuat
  startAutoSlide();
});