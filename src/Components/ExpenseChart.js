import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);



export default function ExpenseChart({ chart }) {
  const monthlyTotals = Array(12).fill(0);
  chart.forEach(function(expense) {
    const month = new Date(expense.date).getMonth();
    monthlyTotals[month] += parseFloat(expense.amount);
  });

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: monthlyTotals,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Expenses by Month' }
    }
  };

  return (
    <div style={{ width: "80%", height: "300px", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
