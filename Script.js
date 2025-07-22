const btnToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

btnToggle.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btnToggle.setAttribute('aria-expanded', aberto);
});
