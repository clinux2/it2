import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:5000/api/sensors');
        const response = await fetch('http://10.106.23.12:8081/all')
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("There was an error fetching the sensor data!", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="App">
      
      <div>
        <div class ="title">TEMP NOTIFY</div>
        <table>
     
          <thead>
            <tr>
              <th>ID</th>
              <th>Temperature</th>
              <th>Humid</th>
              <th>At time</th>
            </tr>
          </thead>
          <tbody>
            {data.map(sensor => (
              <tr key={sensor.id}>
                <td>{sensor.id}</td>
                <td>{sensor.temperature}</td>
                <td>{sensor.humid}</td>
                <td>{sensor.atTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
