import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Labels for the x-axis
const labels = ["1", "2", "3", "4", "5", "6", "7"];

// Data for the chart
const data1 = {
  labels,
  datasets: [
    {
      label: "행복점수",
      data: [32, 50, 45, 30, 20, 10, 20],
      backgroundColor: "rgba(12, 211, 255, 0.2)", // Semi-transparent background
      borderColor: "#0CD3FF",
      borderWidth: 3, // Thicker line
      pointBackgroundColor: "#fff",
      pointBorderColor: "#0CD3FF",
      pointBorderWidth: 2,
      pointRadius: 6, // Larger data points
      fill: true, // Fill area under the line
      tension: 0.4, // Smooth line
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        color: "#e0e0e0", // Light grid line color
        borderDash: [5, 5], // Dash pattern for grid lines
        drawBorder: false, // Hide the border line
      },
      ticks: {
        color: "#333", // Darker color for x-axis labels
        font: {
          size: 14, // Larger font size for x-axis labels
          family: "'Arial', sans-serif", // Font family for labels
        },
      },
    },
    y: {
      grid: {
        color: "#e0e0e0", // Light grid line color
        borderDash: [5, 5], // Dash pattern for y-axis grid lines
        drawBorder: false, // Hide the border line
      },
      ticks: {
        color: "#333", // Darker color for y-axis labels
        font: {
          size: 14, // Larger font size for y-axis labels
          family: "'Arial', sans-serif", // Font family for labels
        },
        stepSize: 5, // Step size for y-axis
        min: 1, // Minimum value for y-axis
        max: 50, // Maximum value for y-axis
      },
      beginAtZero: false, // Remove this if you want to start from 1
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: {
          size: 14, // Larger font size for legend
          family: "'Arial', sans-serif", // Font family for legend
        },
        color: "#333", // Color of the legend text
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker background for tooltips
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#0CD3FF",
      borderWidth: 1,
      caretSize: 5,
      cornerRadius: 5,
    },
  },
};

function LineChart() {
  return (
    <div>
      <h1 style={{ fontSize: 18, textAlign: "center", color: "#333", marginBottom: "10px" }}>행복점수 그래프</h1>
      <div style={{ width: '100%', height: '400px', margin: "0 auto" }}> {/* Adjusted width and height */}
        <Line options={options} data={data1} />
      </div>
    </div>
  );
}

export default LineChart;
