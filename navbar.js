const navbar = document.querySelector('#nav');
const btnToggle = document.querySelector('.btn-toggle');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const date = document.querySelector('#date');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed')
  } else {
    navbar.classList.remove('navbar-fixed')
  }
})
btnToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar')
})

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar')
})
date.innerHTML = new Date().getFullYear()
