export default function Row2000Meter() {
  //Calculate Quarter Distance
  //Get input
  //Split input at the colon
  //If no colon show error message
  //Mulitply minutes by 60 and add to seconds
  //Add this to total time
  //Repeat for each section
  //This assumes that a quarter is 500 meters
  return (
    <div>
      <h1>2000 Meter Row</h1>
      <div>
        <div>
          <label>1st 500 Meters Split Time</label>
          <input type="text" placeholder="Format m:ss Example 1:55" />
        </div>
        <div>
          <label>2nd 500 Meters Split Time</label>
          <input type="text" placeholder="Format m:ss Example 1:55" />
        </div>
        <div>
          <label>3rd 500 Meters Split Time</label>
          <input type="text" placeholder="Format m:ss Example 1:55" />
        </div>
        <div>
          <label>4th 500 Meters Split Time</label>
          <input type="text" placeholder="Format m:ss Example 1:55" />
        </div>
        <div>
          <h2>Estimated Finish Time: </h2>
        </div>
      </div>
    </div>
  );
}
