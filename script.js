// This is a simplified example. For real-world usage, consider using a charting library like Chart.js.

// Sample data for the line graph
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Temperature',
        borderColor: '#007bff',
        data: [20, 22, 24, 21, 23], // Sample temperature values
        fill: false,
    }]
};

// Get the canvas element
const canvas = document.getElementById('line-chart');

// Create the chart
const ctx = canvas.getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
