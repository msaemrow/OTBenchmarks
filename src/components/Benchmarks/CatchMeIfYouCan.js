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
    <div>
      <h1>Catch Me If You Can</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>Minute</td>
              <td>Min Distance</td>
              <td>Avg Speed To Reach</td>
            </tr>
          </thead>
          <tbody>
            {timingGates.map((gate, index) => (
              <tr key={index}>
                <td>{gate[0]}</td>
                <td>{gate[1]}</td>
                <td>{gate[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
