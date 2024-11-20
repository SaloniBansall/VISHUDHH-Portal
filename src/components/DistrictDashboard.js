import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from 'react-chartjs-2';
import ProgressBar from 'react-progressbar-circle';
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

function DistrictDashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mock data
  const cleanlinessPercentage = 72;
  const alertPercentage = 45;
  const cameras = [
    { id: 1, name: 'Camera 1' },
    { id: 2, name: 'Camera 2' },
    { id: 3, name: 'Camera 3' },
    { id: 4, name: 'Camera 4' },
    { id: 5, name: 'Camera 5' },
    { id: 6, name: 'Camera 6' },
  ];

  const emergencyAlerts = [
    {
      id: 1,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661962707694-3420cb435e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWElMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D',
      cleanliness: 50,
      location: 'Area 1',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1638519930507-d1d809d7c949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyYmFnZSUyMHJvYWRzfGVufDB8fDB8fHww',
      cleanliness: 30,
      location: 'Area 2',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1516464689365-70fcae8ec72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhcmJhZ2UlMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D',
      cleanliness: 40,
      location: 'Area 3',
    },
  ];

  const handleCameraClick = (cameraId) => {
    navigate(`/camera/${cameraId}`);
  };

  const handleSendReport = (location) => {
    alert(`Report will be sent for ${location}`);
    // Implementation for sending email will go here.
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Cleanliness',
        data: [90, 85, 80, 75, 70, 65, 60],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Alerts',
        data: [10, 15, 20, 25, 30, 35, 40],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className={`dashboard-container flex flex-col h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Top Dashboard Section */}
      <div className="flex flex-grow">
        {/* Left Section */}
        <div
          className={`left-section w-2/3 p-6 shadow-md rounded-l-lg ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
          style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)' }}
        >
          <div className={`p-4 rounded-lg mb-6 ${darkMode ? 'bg-gray-700' : 'bg-green-100'}`}>
            <h2 className="text-xl font-semibold mb-4">District Dashboard</h2>
            <div className="flex space-x-8">
              <div className="flex flex-col space-y-6 w-1/3">
                <div className="w-24 mx-auto">
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

                <div className="w-24 mx-auto">
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

              <div className="flex-1">
                <Line data={data} options={options} height={150} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`right-section w-1/3 p-6 shadow-md rounded-r-lg border-l ${
            darkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white border-gray-200'
          }`}
          style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Camera Options</h2>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full shadow-md ${darkMode ? 'bg-yellow-500' : 'bg-gray-300'}`}
              title="Toggle Dark Mode"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {cameras.map((camera) => (
              <li key={camera.id}>
                <button
                  onClick={() => handleCameraClick(camera.id)}
                  className="w-full bg-green-300 hover:bg-green-600 text-black font-medium py-2 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105 hover:text-white"
                  style={{
                    boxShadow: '0 4px 8px rgba(16, 185, 129, 0.6)',
                  }}
                >
                  {camera.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Emergency Alerts Section */}
      <div className={`p-6 mt-4 shadow-md rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
  <h2 className="text-2xl font-semibold mb-4">Emergency Alerts</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {emergencyAlerts.map((alert) => (
      <div
        key={alert.id}
        className="bg-gray-100 rounded-lg p-4 shadow-lg"
        style={{
          boxShadow: '0 4px 8px rgba(239, 68, 68, 0.6)', // Red shadow for the whole div
        }}
      >
        <img
          src={alert.imageUrl}
          alt={`Emergency Alert ${alert.id}`}
          className="rounded-lg mb-3 w-full"
        />
        <h3 className="font-medium text-lg mb-2">{alert.location}</h3>
        <div className="w-20 mx-auto">
          <CircularProgressbar
            value={alert.cleanliness}
            text={`${alert.cleanliness}%`}
            styles={buildStyles({
              textColor: darkMode ? '#A7F3D0' : '#166534',
              pathColor: '#10B981',
              trailColor: darkMode ? '#374151' : '#D1FAE5',
              textStyle: {
                fontWeight: 'bolder', // Increase the font weight
                fontSize: '20px', // Optional: adjust font size if needed
              }
            })}
          />
        </div>
        <button
          onClick={() => handleSendReport(alert.location)}
          className="ml-24 w-48 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg mt-4 shadow-md transition duration-200 ease-in-out transform hover:scale-105"
        >
          Report Issue
        </button>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default DistrictDashboard;
