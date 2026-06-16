const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const header = document.querySelector('.site-header');
const form = document.querySelector('#service-form');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

let headerOffset = header.offsetTop;
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > headerOffset + 120);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const success = form.querySelector('.form-success');
  success.hidden = false;
  success.focus();
});

document.querySelector('#year').textContent = new Date().getFullYear();
