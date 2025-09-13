const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// função para mostrar o slide
function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;

  // move os slides no eixo X
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// botões de navegação
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});
prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// autoplay (troca a cada 5s)
setInterval(() => {
  showSlide(currentIndex + 2);
}, 5000);

// inicia
showSlide(0);
