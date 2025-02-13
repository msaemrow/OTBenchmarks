import { useState, useEffect } from "react";

export default function Row2000Meter() {
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
    return `Benchmark Time: ${minutes}:${formattedSeconds}`;
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
    <div>
      <h1>500 Meter Row</h1>
      <div>
        <label>Set Starting Pace: </label>
        <input
          type="text"
          placeholder="Format m:ss Example 1:55"
          value={startingPace}
          onChange={(e) => setStartingPace(e.target.value)}
        />
      </div>
      <div>
        <div>
          <label>1st 200 Meters Split Time</label>
          <input
            type="text"
            name="first"
            placeholder="Format m:ss Example 1:55"
            onChange={changeSplitTime}
            value={splitTimes.first}
          />
        </div>
        <div>
          <label>2nd 200 Meters Split Time</label>
          <input
            type="text"
            name="second"
            placeholder="Format m:ss Example 1:55"
            onChange={changeSplitTime}
            value={splitTimes.second}
          />
        </div>
        <div>
          <label>Last 100 Meters Split Time</label>
          <input
            type="text"
            name="last"
            placeholder="Format m:ss Example 1:55"
            onChange={changeSplitTime}
            value={splitTimes.last}
          />
        </div>
        <div>
          <h2>{totalTime}</h2>
        </div>
      </div>
    </div>
  );
}
