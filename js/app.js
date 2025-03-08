var navBar = document.getElementsByClassName('fa-bars')[0];
var navClose = document.getElementsByClassName('fa-close')[0];


navBar.addEventListener('click', function() {
  document.getElementsByClassName('nav-links')[0].style.display = 'block';
  navBar.style.display = 'none';
  navClose.style.display = 'block';
});

navClose.addEventListener('click', function() {
  document.getElementsByClassName('nav-links')[0].style.display = 'none';
  navBar.style.display = 'block';
  navClose.style.display = 'none';
});
