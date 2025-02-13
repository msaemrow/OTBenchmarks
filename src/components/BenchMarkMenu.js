"use client";

import styles from "./benchMarkMenu.module.css";

export default function Weekday({ onClick }) {
  const weekdays = [
    "1 Mile",
    "Orange Everest",
    "500 meter row",
    "200 meter row",
    "2000 meter row",
    "12 minute run for distance",
    "Catch Me If You Can",
  ];

  const handleClickMenu = (benchmark) => {
    onClick(benchmark);
  };
  return (
    <div className={styles.container}>
      {weekdays.map((benchmark, index) => (
        <p
          key={index}
          className={styles.benchmark}
          onClick={() => handleClickMenu(benchmark)}
        >
          {benchmark}
        </p>
      ))}
    </div>
  );
}
