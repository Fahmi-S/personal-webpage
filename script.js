document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');

  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          sections.forEach(section => {
              if (section.id === targetId) {
                  section.style.display = 'block';
              } else {
                  section.style.display = 'none';
              }
          });
      });
  });

  // Show home section by default
  document.getElementById('home').style.display = 'block';
});
