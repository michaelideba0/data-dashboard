// Line Chart
const lineCtx = document.getElementById('lineChart');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales ($)',
      data: [500, 700, 1200, 900, 1500, 2000],
      borderColor: '#ff7b00',
      backgroundColor: 'rgba(255, 123, 0, 0.3)',
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  }
});

// Bar Chart
const barCtx = document.getElementById('barChart');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [{
      label: 'Revenue ($)',
      data: [800, 1200, 600, 900],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Male', 'Female', 'Other'],
    datasets: [{
      label: 'Users',
      data: [60, 35, 5],
      backgroundColor: ['#007bff', '#e83e8c', '#6c757d']
    }]
  },
  options: {
    responsive: true
  }
});