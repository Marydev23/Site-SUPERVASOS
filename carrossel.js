// ====== DOM READY ======
document.addEventListener('DOMContentLoaded', () => {

  // ====== FILTRO SIDEBAR ======
  const links = document.querySelectorAll('.sidebar a');

  let produtos = document.querySelectorAll('.list-vvariados'); // padrão (variados)
  if (document.querySelector('.list-vcimento')) produtos = document.querySelectorAll('.list-vcimento');
  if (document.querySelector('.list-vbarro')) produtos = document.querySelectorAll('.list-vbarro');

  if (links.length && produtos.length) {
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const categoria = link.dataset.cat.toLowerCase().trim();

        links.forEach(l => l.classList.remove('ativo'));
        link.classList.add('ativo');

        produtos.forEach(produto => {
          const prodCat = produto.dataset.categoria.toLowerCase().trim();
          produto.style.display = categoria === 'todos' || prodCat === categoria ? 'block' : 'none';
        });
      });
    });
  }

   // ====== MENU HAMBURGUER ======
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
  
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }
});


