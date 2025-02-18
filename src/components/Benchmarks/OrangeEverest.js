"use client";
import { useEffect, useState } from "react";
import styles from "./OrangeEverest.module.css";

export default function () {
  const orangeEverest = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
    [14, 15],
    [15, 14],
    [16, 12],
    [17, 10],
    [18, 8],
    [19, 6],
    [20, 4],
    [21, 2],
    [22, 1],
    [23, 1],
  ];

  const [speeds, setSpeeds] = useState(new Array(orangeEverest.length).fill(0));
  const [startingSpeed, setStartingSpeed] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);

  const handleSpeedChange = (index, value) => {
    const newSpeeds = [...speeds];
    newSpeeds[index] = value;
    setSpeeds(newSpeeds); // Update state
  };

  const calculateTotalDistance = (speeds) => {
    let totalDistance = 0;
    for (let speed of speeds) {
      const distance = Math.round((Number(speed) / 60) * 1000) / 1000;
      totalDistance += distance;
    }
    return Math.floor(totalDistance * 1000) / 1000;
  };

  useEffect(() => {
    setTotalDistance(calculateTotalDistance(speeds));
  }, [speeds]);

  useEffect(() => {
    if (startingSpeed === 0) {
      return;
    }
    let newSpeeds = [];
    let currentSpeed = startingSpeed;

    for (let i = 0; i < orangeEverest.length; i++) {
      const incline = orangeEverest[i][1];
      const prevIncline = i > 0 ? orangeEverest[i - 1][1] : incline;

      if (i >= 5 && i < 15) {
        // Decrease speed by 0.5 per minute after minute 5
        currentSpeed = Math.max(4, currentSpeed - 0.5);
      } else if (i >= 15 && incline < prevIncline) {
        // Increase speed by 0.5 per minute when incline drops
        currentSpeed += 0.5;
      }

      newSpeeds.push(currentSpeed);
    }

    setSpeeds(newSpeeds);
  }, [startingSpeed]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Orange Everest</h1>
      <p className={styles.finishTime}>Estimate Distance: {totalDistance}</p>
      <div className={styles.startingSpeed}>
        <h3 className={styles.smallTitle}>Starting Speed: </h3>
        <input
          value={startingSpeed}
          type="number"
          onChange={(e) => setStartingSpeed(e.target.value)}
          className={styles.input}
          step="0.1"
        />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <td>Minute</td>
              <td>Percent Incline</td>
              <td>Speed</td>
            </tr>
          </thead>
          <tbody>
            {orangeEverest.map((step, index) => (
              <tr key={index}>
                <td>{step[0]}</td>
                <td>{step[1]}</td>
                <td>
                  <input
                    value={speeds[index]}
                    type="number"
                    step="0.1"
                    onChange={(e) => handleSpeedChange(index, e.target.value)}
                    className={styles.input}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
