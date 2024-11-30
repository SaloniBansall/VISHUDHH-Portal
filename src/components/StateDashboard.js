import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from 'react-chartjs-2';
import ProgressBar from 'react-progressbar-circle';
import '../App.css'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const StateDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // Initialize the history hook for navigation

  // Mock data - replace with actual state data
  const cleanlinessPercentage = 72;
  const alertPercentage = 45;

  const districts = [
    { id: 1, name: 'North District', cleanliness: 82 },
    { id: 2, name: 'South District', cleanliness: 68 },
    { id: 3, name: 'East District', cleanliness: 77 },
    { id: 4, name: 'West District', cleanliness: 71 },
    { id: 5, name: 'Central District', cleanliness: 79 },
    { id: 6, name: 'Urban District', cleanliness: 65 },
  ];

  const monthlyData = [
    { month: 'Jan', cleanliness: 85, alerts: 15 },
    { month: 'Feb', cleanliness: 82, alerts: 18 },
    { month: 'Mar', cleanliness: 78, alerts: 22 },
    { month: 'Apr', cleanliness: 75, alerts: 25 },
    { month: 'May', cleanliness: 72, alerts: 28 },
    { month: 'Jun', cleanliness: 70, alerts: 30 },
    { month: 'Jul', cleanliness: 68, alerts: 32 },
  ];

  const districtAlerts = [
    {
      id: 1,
      district: 'North District',
      cleanliness: 65,
      pendingIssues: 12,
      imageUrl: 'https://images.unsplash.com/photo-1496144300411-8dd31ce145ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      district: 'South District',
      cleanliness: 45,
      pendingIssues: 18,
      imageUrl: 'https://images.unsplash.com/photo-1495556650867-99590cea3657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhdGUlMjBpbWFnZXMlMjB3aXRoJTIwZ2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      district: 'East District',
      cleanliness: 55,
      pendingIssues: 8,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1678050182360-85277267b40c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RhdGUlMjBpbWFnZXMlMjB3aXRoJTIwZ2FyYmFnZXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  const handleDistrictClick = (districtId) => {
    // Redirect to the district dashboard page
    navigate(`/district-dashboard`);
  };

  const handleEscalateIssue = (district) => {
    alert(`Issue escalated for ${district}`);
  };

  // Calculate chart dimensions
  const chartWidth = 800;
  const chartHeight = 400;
  const padding = 50;
  const graphWidth = chartWidth - padding * 2;
  const graphHeight = chartHeight - padding * 2;

  const maxCleanliness = Math.max(...monthlyData.map((d) => d.cleanliness));
  const maxAlerts = Math.max(...monthlyData.map((d) => d.alerts));

  const cleanlinessPoints = monthlyData
    .map((data, index) => {
      const x = index * (graphWidth / (monthlyData.length - 1)) + padding;
      const y = chartHeight - (data.cleanliness / maxCleanliness) * graphHeight - padding;
      return `${x},${y}`;
    })
    .join(' ');

  const alertsPoints = monthlyData
    .map((data, index) => {
      const x = index * (graphWidth / (monthlyData.length - 1)) + padding;
      const y = chartHeight - (data.alerts / maxAlerts) * graphHeight - padding;
      return `${x},${y}`;
    })
    .join(' ');




    const data = {
      labels: monthlyData.map((data) => data.month),
      datasets: [
        {
          label: 'Cleanliness (%)',
          data: monthlyData.map((data) => data.cleanliness),
          fill: true, // Fill area under the line
          backgroundColor: 'rgba(16, 185, 129, 0.2)', // Light green fill color
          borderColor: '#10B981', // Line color
          pointBackgroundColor: '#10B981', // Point color
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
          tension: 0.3, // Smooth curve
          borderWidth: 2,
        },
        {
          label: 'Alerts',
          data: monthlyData.map((data) => data.alerts),
          fill: true, // Fill area under the line
          backgroundColor: 'rgba(239, 68, 68, 0.2)', // Light red fill color
          borderColor: '#EF4444', // Line color
          pointBackgroundColor: '#EF4444', // Point color
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
          tension: 0.3, // Smooth curve
          borderWidth: 2,
        },
      ],
    };
  
    const options = {
      responsive: true,
      animation: {
        duration: 1500, // Animation duration
        easing: 'easeInOutQuad', // Easing function for smooth animation
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 16,
              weight: 'bold',
            },
          },
        },
        tooltip: {
          backgroundColor: '#000000',
          titleColor: '#FFFFFF',
          bodyColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          borderWidth: 1,
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
            },
          },
          bodyFont: {
            size: 16, // Larger font size for tooltip
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(0,0,0,0.1)', // X-axis grid line color
          },
          ticks: {
            font: {
              size: 16,
              weight: 'bold',
            },
          },
        },
        y: {
          grid: {
            color: 'rgba(0,0,0,0.1)', // Y-axis grid line color
          },
          ticks: {
            font: {
              size: 16,
              weight: 'bold',
            },
          },
        },
      },
    };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex flex-grow">
        {/* Left Section - Analytics */}
        <div
          className={`left-section w-2/3 p-6 shadow-md rounded-l-lg ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
          style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)' }}
        >
          <div className={`p-4 rounded-lg mb-6 ${darkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
            <h2 className="text-xl font-semibold mb-4">State Dashboard</h2>
            <div className="flex space-x-8">
              <div className="flex flex-col space-y-6 w-1/3">
                <div className="w-24 mx-auto circular">
                  <CircularProgressbar
                    value={cleanlinessPercentage}
                    text={`${cleanlinessPercentage}%`}
                    styles={buildStyles({
                      textColor: darkMode ? '#A7F3D0' : '#166534',
                      pathColor: '#10B981',
                      trailColor: darkMode ? '#374151' : '#D1FAE5',
                    })}
                  />
                  <p className="text-center mt-2 text-sm">Cleanliness</p>
                </div>

                <div className="w-24 mx-auto circular">
                  <CircularProgressbar
                    value={alertPercentage}
                    text={`${alertPercentage}%`}
                    styles={buildStyles({
                      textColor: darkMode ? '#FCA5A5' : '#7C2D12',
                      pathColor: '#EF4444',
                      trailColor: darkMode ? '#374151' : '#FEE2E2',
                    })}
                  />
                  <p className="text-center mt-2 text-sm">Alerts</p>
                </div>
              </div>

              <div className="mb-8">
               <h2 className="text-xl font-semibold mb-4">Monthly Cleanliness & Alerts</h2>
               <div className="chart-container">
                <Line data={data} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - District Selection */}
        <div className={`w-1/3 p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Districts</h2>
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-yellow-500' : 'bg-gray-300'}`}>
              {darkMode ? '🌙' : '☀'}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {districts.map((district) => (
              <div
                key={district.id}
                className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} hover:bg-blue-200`}
                style={{ boxShadow: darkMode ? '0 4px 8px 0 rgba(0,0,0,0.2)' : '0 4px 8px 0 rgba(0,0,255,0.2)' }}
              >
                <div>
                  <span className="font-medium text-lg">{district.name}</span>
                  <p className="text-green-500">Cleanliness: {district.cleanliness}%</p>
                  <button
                  onClick={() => handleDistrictClick(district.id)}
                  className="ml-7 w-auto bg-blue-600 mt-4 text-white py-1 px-4 rounded-full"
                  >
                  View Details
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Alerts */}
      <div className={`p-6 mt-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
  <h2 className="text-2xl font-semibold mb-6">District Alerts</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {districtAlerts.map((alert) => (
      <div
        key={alert.id}
        className={`rounded-lg p-4 ${
          alert.cleanliness < 50
            ? 'bg-red-100'
            : darkMode
            ? 'bg-gray-700'
            : 'bg-gray-100'
        }`}
      >
        <img
          src={alert.imageUrl}
          alt={`Alert in ${alert.district}`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="font-medium text-lg mb-2">{alert.district}</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-full border-4 ${
                alert.cleanliness < 50 ? 'border-red-500' : 'border-blue-500'
              } flex items-center justify-center`}
            >
              <span className="text-sm font-bold">{alert.cleanliness}%</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm">Pending Issues</p>
            <p className="text-2xl font-bold text-red-500">{alert.pendingIssues}</p>
          </div>
        </div>
        <button
          onClick={() => handleEscalateIssue(alert.district)}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition duration-200"
        >
          Escalate Issues
        </button>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};


export default StateDashboard;