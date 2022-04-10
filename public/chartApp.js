
async function tryChart() {
    await getChartData()

    // Line Plot
    const lineChart = new Chart(
        document.getElementById('lineChart').getContext('2d'), {
        type: 'line',
        data: {
            datasets: [{
                label: 'Bitcoin Price',
                backgroundColor: 'blue',
                borderColor: 'rgb(255, 99, 132)',
                data: lineBarData
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series'
                }]
            }
        }
    }
    );

    // Bar chart
    const barChart = new Chart(
        document.getElementById('barChart').getContext('2d'), {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Bitcoin Price',
                backgroundColor: 'purple',
                borderColor: 'rgb(255, 99, 132)',
                data: lineBarData
            }]
        },
        options: {
            scales: {
                y: [{
                    type: 'time',
                    display: true,
                    ticks: {
                        min: 40000
                    }
                }]
            }
        }
    }
    );

    // Scatter Plot
    const scatterChart = new Chart(
        document.getElementById('scatterChart').getContext('2d'), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Bitcoin Price',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'blue',
                data: scatterData,
                pointRadius: 5
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series'
                }]
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Scatter Chart'
                }
            }
        }
    }
    );

}
tryChart()

// Fetch Data from API

async function getChartData() {
    const API_URL = 'http://127.0.0.1:8080/charts';
    const response = await fetch(API_URL)
    const result = await response.json()
    scatterData = result.scatterData
    lineBarData = result.lineBarData

}
