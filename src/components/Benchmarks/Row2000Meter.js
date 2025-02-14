import { useState, useEffect } from "react";
import styles from "./Row2000Meter.module.css";

export default function Row2000Meter() {
  const [startingPace, setStartingPace] = useState("");
  const [splitTimes, setSplitTimes] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [totalTime, setTotalTime] = useState("0");

  const addSplitTimes = (splitTimes) => {
    let totalTime = 0;
    Object.values(splitTimes).map((time) => {
      const minutesSeconds = time.split(":");
      const minutes = Number(minutesSeconds[0]) * 60;
      const seconds = Number(minutesSeconds[1]);
      totalTime += minutes;
      totalTime += seconds;
    });
    console.log(totalTime);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    if (Number.isNaN(minutes) || Number.isNaN(seconds)) {
      return "Enter a split time to see your estimate finish time";
    }
    return `Benchmark Time: ${minutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    setSplitTimes({
      first: startingPace,
      second: startingPace,
      third: startingPace,
      fourth: startingPace,
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
      <h1 className={styles.title}>2000 Meter Row</h1>
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
      <div className={styles.quarterInputsContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>1st 500 Meters Split Time</label>
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
          <label className={styles.label}>2nd 500 Meters Split Time</label>
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
          <label className={styles.label}>3rd 500 Meters Split Time</label>
          <input
            className={styles.input}
            type="text"
            name="third"
            placeholder="Format m:ss"
            onChange={changeSplitTime}
            value={splitTimes.third}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>4th 500 Meters Split Time</label>
          <input
            className={styles.input}
            type="text"
            name="fourth"
            placeholder="Format m:ss"
            onChange={changeSplitTime}
            value={splitTimes.fourth}
          />
        </div>
      </div>
    </div>
  );
}
