import styles from "./CatchMeIfYouCan.module.css";

export default function CatchMeIfYouCan() {
  const timingGates = [
    [2, 0.15, 4.5],
    [4, 0.3, 4.5],
    [6, 0.5, 5],
    [8, 0.7, 5.3],
    [10, 1, 6],
    [12, 1.3, 6.5],
    [14, 1.6, 6.9],
    [16, 1.9, 7.2],
    [17, 2.1, 7.4],
    [18, 2.3, 7.7],
    [19, 2.5, 7.9],
    [20, 2.8, 8.4],
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catch Me If You Can</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <td className={styles.headerData}>Minute</td>
              <td className={styles.headerData}>Min Distance</td>
              <td className={styles.headerData}>Avg Speed To Reach</td>
            </tr>
          </thead>
          <tbody>
            {timingGates.map((gate, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.tableData}>{gate[0]}</td>
                <td className={styles.tableData}>{gate[1]}</td>
                <td className={styles.tableData}>{gate[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
