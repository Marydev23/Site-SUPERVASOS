// ===== CARROSSEL =====
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// função para mostrar o slide
function showSlide(index) {
  if (!slidesContainer) return; // evita erro se não tiver carrossel
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// botões de navegação
if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

// autoplay
if (slidesContainer && slides.length > 0) {
  setInterval(() => showSlide(currentIndex + 1), 5000);
}

// inicia
showSlide(0);


// ===== FILTRO SIDEBAR =====
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebar a');

  // Verifica qual página está sendo carregada
  let produtos = document.querySelectorAll('.list-vvariados'); // padrão (variados)

  // Se for a página de cimento, troca o seletor:
  if (document.querySelector('.list-vcimento')) {
    produtos = document.querySelectorAll('.list-vcimento');
  }

  // Se for a página de barro, troca o seletor:
  if (document.querySelector('.list-vbarro')) {
    produtos = document.querySelectorAll('.list-vbarro');
  }

  // Se não tiver produtos (nenhuma das três páginas), sai fora
  if (!links.length || !produtos.length) return;

  // Adiciona evento nos links da sidebar
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const categoria = link.dataset.cat.toLowerCase().trim();

      // Remove destaque anterior
      links.forEach(l => l.classList.remove('ativo'));
      link.classList.add('ativo');

      // Filtra os produtos da página atual
      produtos.forEach(produto => {
        const prodCat = produto.dataset.categoria.toLowerCase().trim();
        produto.style.display =
          categoria === 'todos' || prodCat === categoria
            ? 'block'
            : 'none';
      });
    });
  });
});
