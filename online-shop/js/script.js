window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.remove('transparent');
      header.classList.add('bg-dark');
  } else {
      header.classList.remove('bg-dark');
      header.classList.add('transparent');
  }
});
