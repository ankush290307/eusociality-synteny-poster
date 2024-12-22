// ScrollReveal Animations
ScrollReveal().reveal('#introduction', { delay: 200, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#methods', { delay: 400, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#results', { delay: 600, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#conclusion', { delay: 800, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#references', { delay: 1000, origin: 'bottom', distance: '50px' });

// Chart.js Example
const ctx = document.getElementById('resultsChart').getContext('2d');
const resultsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Eusocial', 'Nonsocial', 'Other Insects'],
        datasets: [{
            label: 'Syntenic Conservation Level',
            data: [85, 60, 70],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 206, 86, 0.7)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255,99,132,1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

