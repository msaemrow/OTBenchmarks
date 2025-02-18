"use client";

import { useState, useEffect } from "react";
import { calculateTime, calculateMileTime } from "@/app/utils/oneMile";
import styles from "./OneMile.module.css";

export default function OneMile() {
  const [speed1, setSpeed1] = useState(4);
  const [time1, setTime1] = useState(null);
  const [minuteSpeeds, setMinuteSpeeds] = useState([]);
  const [startingSpeed, setStartingSpeed] = useState(4);
  const [mileTime, setMileTime] = useState("");

  useEffect(() => {
    setTime1(calculateTime(speed1));
    if (startingSpeed > 0) {
      const numberOfInputs = Math.ceil(60 / startingSpeed);
      setMinuteSpeeds(new Array(numberOfInputs).fill(startingSpeed));
    } else {
      setMinuteSpeeds([]);
    }
  }, [speed1, startingSpeed]);

  useEffect(() => {
    const { totalMileTime } = calculateMileTime(minuteSpeeds);
    setMileTime(totalMileTime);
  }, [minuteSpeeds]);

  const updateSpeed = (index, newSpeed) => {
    const updatedSpeeds = [...minuteSpeeds];
    updatedSpeeds[index] = parseFloat(newSpeed) || 0;
    setMinuteSpeeds(updatedSpeeds);
  };

  const handleStartingSpeedChange = (speed) => {
    // Parse the value from the input and ensure it's a valid number
    const newSpeed = parseFloat(speed);
    if (newSpeed > 0) {
      setStartingSpeed(newSpeed);
    } else {
      // Handle invalid or zero input
      setStartingSpeed(0);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>One Mile Calculator</h1>
      <div className={styles.timeContainer}>
        {" "}
        <div className={styles.mileMethodContainer}>
          <h2 className={styles.title}>Pick It and Stick It</h2>
          <h3 className={styles.finishTime}>Estimate 1 Mile Time</h3>

          <p className={styles.finishTime}>{time1?.mileTime}</p>
          <input
            type="number"
            value={speed1}
            onChange={(e) => setSpeed1(e.target.value)}
            placeholder="Enter Speed"
            className={styles.input}
            step="0.1"
          />
        </div>
        <div className={styles.mileMethodContainer}>
          <h2 className={styles.title}>Steady Increase</h2>
          <h3 className={styles.finishTime}>Estimated 1 Mile Time</h3>
          <p className={styles.finishTime}>{mileTime} </p>
          <div>
            <label className={styles.label}>Starting Speed (mph):</label>
            <input
              className={styles.input}
              type="number"
              step="0.1"
              value={startingSpeed}
              onChange={(e) => handleStartingSpeedChange(e.target.value)} // Handle starting speed input change
            />
          </div>
          <div>
            {minuteSpeeds.map((speed, index) => (
              <div key={index} className={styles.minuteInput}>
                <label className={styles.label}>Minute {index + 1}:</label>
                <input
                  className={styles.input}
                  type="number"
                  step="0.1"
                  value={speed}
                  onChange={(e) => updateSpeed(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
