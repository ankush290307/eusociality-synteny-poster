document.addEventListener('DOMContentLoaded', () => {
  // Initialize ScrollReveal Animations
  ScrollReveal().reveal('#introduction', { delay: 200, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#what-we-know', { delay: 400, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#methods', { delay: 600, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#results', { delay: 800, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#podcast', { delay: 1000, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#gallery', { delay: 1200, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#videos', { delay: 1400, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#conclusion', { delay: 1600, origin: 'bottom', distance: '50px', reset: false });
  ScrollReveal().reveal('#references', { delay: 1800, origin: 'bottom', distance: '50px', reset: false });

  // Initialize Chart.js
  const ctx = document.getElementById('resultsChart').getContext('2d');
  const resultsChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Eusocial', 'Nonsocial', 'Other Insects'],
          datasets: [{
              label: 'Syntenic Conservation Level (%)',
              data: [85, 60, 70],
              backgroundColor: [
                  'rgba(255, 193, 7, 0.7)', // Amber for Eusocial
                  'rgba(220, 53, 69, 0.7)', // Red for Nonsocial
                  'rgba(40, 167, 69, 0.7)'  // Green for Other Insects
              ],
              borderColor: [
                  'rgba(255, 193, 7, 1)',
                  'rgba(220, 53, 69, 1)',
                  'rgba(40, 167, 69, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: '#333'
              }
            }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: {
                    color: '#333'
                  }
              },
              x: {
                ticks: {
                  color: '#333'
                }
              }
          }
      }
  });

  // Dark Mode Toggle
  const toggleButton = document.getElementById('darkModeToggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Active Navigation Link Highlighting
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === `#${current}`){
        link.classList.add('active');
      }
    });
  });
});
