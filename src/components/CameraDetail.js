import React from 'react';
import { useParams } from 'react-router-dom';

function CameraDetail() {
  const { id } = useParams();

  // Mock camera data
  const cameraData = {
    1: {
      image: 'https://images.unsplash.com/photo-1516464689365-70fcae8ec72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhcmJhZ2UlMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D',
      timestamp: '2024-11-05 10:30 AM',
      cleanlinessPercentage: '65%',
      location: 'Zone 1 - North Wing',
    },
    2: {
      image: 'https://media.istockphoto.com/id/513494822/photo/polluted-river-banks.webp?a=1&b=1&s=612x612&w=0&k=20&c=y2pk0_CpjS-xRAcq2HhOwWZiDP6gdAPiH5hMhqwGDvs=',
      timestamp: '2024-11-05 10:45 AM',
      cleanlinessPercentage: '75%',
      location: 'Zone 2 - South Wing',
    },
    3: {
      image: 'https://plus.unsplash.com/premium_photo-1663013360223-019784f42500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FyYmFnZSUyMHBvbHV0ZWQlMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D',
      timestamp: '2024-11-05 11:00 AM',
      cleanlinessPercentage: '85%',
      location: 'Zone 3 - East Wing',
    },
    4: {
      image: 'https://images.unsplash.com/photo-1495556650867-99590cea3657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhcmJhZ2UlMjBwb2x1dGVkJTIwcm9hZHN8ZW58MHx8MHx8fDA%3D',
      timestamp: '2024-11-05 11:15 AM',
      cleanlinessPercentage: '90%',
      location: 'Zone 4 - West Wing',
    },
    5: {
      image: 'https://media.istockphoto.com/id/908521560/photo/take-away-fast-food-box-on-pavement.webp?a=1&b=1&s=612x612&w=0&k=20&c=t2e3XLez8yL9L6PVWpAVwMmWWMXzTbHvw7b8B27em3o=',
      timestamp: '2024-11-05 11:30 AM',
      cleanlinessPercentage: '80%',
      location: 'Zone 5 - Central Wing',
    },
    6: {
      image: 'https://media.istockphoto.com/id/1489051648/photo/open-garbage-dust-bin-liter-with-plastic-begs-and-waste-items-at-day-from-different-angle.webp?a=1&b=1&s=612x612&w=0&k=20&c=-NTxJIaQrIjK4-WwxYbh6r2a7W2DPUQeQy0yCf_wnYQ=',
      timestamp: '2024-11-05 11:45 AM',
      cleanlinessPercentage: '70%',
      location: 'Zone 6 - Basement',
    },
  };

  const camera = cameraData[id];

  return (
    <div className="camera-detail p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Camera {id} Details</h2>
      <img
        src={camera.image}
        alt={`Camera ${id}`}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-600 mb-2">Timestamp: {camera.timestamp}</p>
      <p className="text-gray-600 mb-2">Cleanliness: {camera.cleanlinessPercentage}</p>
      <p className="text-gray-600 mb-4">Location: {camera.location}</p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
        Send Alert
      </button>
    </div>
  );
}

export default CameraDetail;

// 3: {
//   image: 'https://plus.unsplash.com/premium_photo-1663013360223-019784f42500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FyYmFnZSUyMHBvbHV0ZWQlMjByb2Fkc3xlbnwwfHwwfHx8MA%3D%3D',
//   timestamp: '2024-11-05 11:00 AM',
//   cleanlinessPercentage: '85%',
//   location: 'Zone 3 - East Wing',
// },
// 4: {
//   image: 'https://images.unsplash.com/photo-1495556650867-99590cea3657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhcmJhZ2UlMjBwb2x1dGVkJTIwcm9hZHN8ZW58MHx8MHx8fDA%3D',
//   timestamp: '2024-11-05 11:15 AM',
//   cleanlinessPercentage: '90%',
//   location: 'Zone 4 - West Wing',
// },
// 5: {
//   image: 'https://media.istockphoto.com/id/908521560/photo/take-away-fast-food-box-on-pavement.webp?a=1&b=1&s=612x612&w=0&k=20&c=t2e3XLez8yL9L6PVWpAVwMmWWMXzTbHvw7b8B27em3o=',
//   timestamp: '2024-11-05 11:30 AM',
//   cleanlinessPercentage: '80%',
//   location: 'Zone 5 - Central Wing',
// },
// 6: {
//   image: 'https://media.istockphoto.com/id/1489051648/photo/open-garbage-dust-bin-liter-with-plastic-begs-and-waste-items-at-day-from-different-angle.webp?a=1&b=1&s=612x612&w=0&k=20&c=-NTxJIaQrIjK4-WwxYbh6r2a7W2DPUQeQy0yCf_wnYQ=',
//   timestamp: '2024-11-05 11:45 AM',
//   cleanlinessPercentage: '70%',
//   location: 'Zone 6 - Basement',
// },
