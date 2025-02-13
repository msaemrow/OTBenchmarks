"use client";

import { useEffect, useState } from "react";
import styles from "./TwelveMinute.module.css";

export default function TwelveMinute() {
  const [totalDistance, setTotalDistance] = useState(0);
  const [speeds, setSpeeds] = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  const [startingSpeed, setStartingSpeed] = useState(4);

  const calculateTotalDistance = (speeds) => {
    let totalDistance = 0;
    for (let speed of speeds) {
      const distance = Math.round((speed / 60) * 1000) / 1000;
      totalDistance += distance;
    }
    return Math.floor(totalDistance * 1000) / 1000;
  };

  useEffect(() => {
    setTotalDistance(calculateTotalDistance(speeds));
  }, [speeds]);

  useEffect(() => {
    setSpeeds(new Array(12).fill(startingSpeed));
  }, [startingSpeed]);

  const handleSpeedChange = (index, speed) => {
    const updatedSpeeds = [...speeds];
    updatedSpeeds[index] = parseFloat(speed) || 0;
    setSpeeds(updatedSpeeds);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Twelve Minute Run For Distance</h1>
      <h3 className={styles.totalDistance}>
        Estimate Total Distance {totalDistance} miles
      </h3>
      <div className={styles.speedInputContainer}>
        <div className={styles.startingSpeed}>
          <label className={styles.speedLabel}>Starting Speed (mph):</label>
          <input
            className={styles.speedInput}
            type="number"
            step="0.1"
            value={startingSpeed}
            onChange={(e) => setStartingSpeed(e.target.value)} // Handle starting speed input change
          />
        </div>
        <div>
          {speeds.map((speed, index) => (
            <div key={index} className={styles.inputContainer}>
              <label className={styles.speedLabel}>Minute {index + 1}: </label>
              <input
                className={styles.speedInput}
                type="number"
                step="0.1"
                value={speed}
                onChange={(e) => handleSpeedChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
