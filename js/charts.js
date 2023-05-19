const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['10 يناير', '12 يناير', '13 يناير', '14 يناير', '15 يناير', '16 يناير', '17 يناير', '18 يناير'],
        datasets: [{
            data: [12, 19, 7, 5, 2, 3, 8, 16],
            borderWidth: 1,
            backgroundColor: [
                'gainsboro',
                '#0249ac',
                'gainsboro',
                'gainsboro',
                'gainsboro',
                'gainsboro',
                'gainsboro',
                'gainsboro',
            ],
            barThickness: 30,
            borderRadius: 5
        }]
    },

    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 0,
                    },
                }
            },
            callbacks: {
                label: function (context) {
                    let label = context.dataset.label || '';

                }
            }
        },
        classes: {
            title: 'chart-title',
            // Add more classes as needed for other elements
        },
        responsive: true
    }
});

chart.canvas.parentNode.style.width = '100%';
