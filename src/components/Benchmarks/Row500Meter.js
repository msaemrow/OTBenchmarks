import { useState, useEffect } from "react";
import styles from "./Row500Meter.module.css";

export default function Row500Meter() {
  const [startingPace, setStartingPace] = useState("");
  const [splitTimes, setSplitTimes] = useState({
    first: "",
    second: "",
    last: "",
  });
  const [totalTime, setTotalTime] = useState("0");

  const addSplitTimes = (splitTimes) => {
    let totalTime = 0;
    Object.entries(splitTimes).forEach(([key, value]) => {
      const minutesSeconds = value.split(":");
      const minutes = Number(minutesSeconds[0]) * 60;
      const seconds = Number(minutesSeconds[1]);
      let splitTimeInSeconds = minutes + seconds;
      if (key !== "last") {
        let time = (200 / 500) * splitTimeInSeconds;
        totalTime += time;
      } else if (key === "last") {
        let time = (100 / 500) * splitTimeInSeconds;
        totalTime += time;
      }
    });
    console.log(totalTime);
    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    if (Number.isNaN(minutes) || Number.isNaN(seconds)) {
      return "Enter a split time to see your estimate finish time";
    }
    return `Estimated Finish: ${minutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    setSplitTimes({
      first: startingPace,
      second: startingPace,
      last: startingPace,
    });
  }, [startingPace]);

  const changeSplitTime = (e) => {
    const { name, value } = e.target;
    setSplitTimes((prevVals) => ({
      ...prevVals,
      [name]: value,
    }));
    console.log(value);
  };

  useEffect(() => {
    setTotalTime(addSplitTimes(splitTimes));
  }, [startingPace, splitTimes]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>500 Meter Row</h1>
      <h2 className={styles.finishTime}>{totalTime}</h2>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Set Starting Pace: </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Format m:ss"
          value={startingPace}
          onChange={(e) => setStartingPace(e.target.value)}
        />
      </div>
      <div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>1st 200 Meters Split Time</label>
          <input
            className={styles.input}
            type="text"
            name="first"
            placeholder="Format m:ss"
            onChange={changeSplitTime}
            value={splitTimes.first}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>2nd 200 Meters Split Time</label>
          <input
            className={styles.input}
            type="text"
            name="second"
            placeholder="Format m:ss"
            onChange={changeSplitTime}
            value={splitTimes.second}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Last 100 Meters Split Time</label>
          <input
            className={styles.input}
            type="text"
            name="last"
            placeholder="Format m:ss"
            onChange={changeSplitTime}
            value={splitTimes.last}
          />
        </div>
      </div>
    </div>
  );
}
