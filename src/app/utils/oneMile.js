export function calculateTime(speed) {
  if (speed < 1) return "Invalid speed";

  const timeInHours = 1 / speed;
  const timeInMinutes = timeInHours * 60;
  const minutes = Math.floor(timeInMinutes);
  const seconds = Math.floor((timeInMinutes - minutes) * 60);

  const formattedSeconds = seconds.toString().padStart(2, "0");
  return { mileTime: `${minutes}:${formattedSeconds}`, minutes, seconds };
}

export function calculateMileTime(speeds) {
  let distanceCovered = 0;
  let totalTimeSeconds = 0;
  let newSpeeds = [];

  for (let i = 0; i < speeds.length; i++) {
    if (distanceCovered >= 1) break;

    const speed = speeds[i];
    const minuteDistance = speed / 60;
    const remainingDistance = 1 - distanceCovered;

    if (minuteDistance <= remainingDistance) {
      totalTimeSeconds += 60;
      distanceCovered += minuteDistance;
      newSpeeds.push(speed);
    } else {
      totalTimeSeconds += (remainingDistance / minuteDistance) * 60;
      distanceCovered = 1;
      newSpeeds.push(speed);
    }
  }

  const minutes = Math.floor(totalTimeSeconds / 60);
  const seconds = Math.round(totalTimeSeconds % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return { totalMileTime: formattedTime, updatedSpeeds: newSpeeds };
}
