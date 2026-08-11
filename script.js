const toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('#sidebar');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}
document.querySelectorAll('.sidebar a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 800) sidebar.classList.remove('open');
}));
