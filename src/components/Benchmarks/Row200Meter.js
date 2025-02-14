"use client";
import { useEffect, useState } from "react";
import styles from "./Row200Meter.module.css";

export default function Row200Meter() {
  const [splitTime, setSplitTime] = useState("");
  const [finishTime, setFinishTime] = useState("");

  const calculateTime = (pace) => {
    if (pace && pace.includes(":")) {
      const minutesSeconds = pace.split(":");
      const paceInSeconds =
        Number(minutesSeconds[0]) * 60 + Number(minutesSeconds[1]);
      let finishTime = (200 / 500) * paceInSeconds;
      setFinishTime(finishTime);
    } else {
      setFinishTime(null);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (timeInSeconds === null) return "";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.round(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (splitTime.length >= 4 && splitTime.length < 6) {
      calculateTime(splitTime);
    }
  }, [splitTime]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>200 Meter Row</h1>
      <h3 className={styles.finishTime}>
        Estimated Finish Time: {formatTime(finishTime)}
      </h3>
      <div className={styles.inputContainer}>
        <label className={styles.label}>500 Meter Split Time: </label>
        <input
          className={styles.input}
          type="text"
          value={splitTime}
          placeholder="Format m:ss"
          onChange={(e) => setSplitTime(e.target.value)}
        />
      </div>
    </div>
  );
}
