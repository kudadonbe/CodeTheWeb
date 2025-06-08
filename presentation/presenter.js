let currentSlide = 0;

function showSlide(index) {
  const slide = slides[index];
  const slideBox = document.getElementById("slideContent");

  slideBox.innerHTML = `
    <h1>${slide.title}</h1>
    <div>${slide.content}</div>
  `;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

// Initialize
showSlide(currentSlide);
