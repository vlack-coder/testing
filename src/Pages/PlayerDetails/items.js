import { Line } from "react-chartjs-2";
import React, { useState } from "react";

const items = [
  {
    heading: <h3 className="heder"> Physical Achievements</h3>,
    content: (
      <div className="tmt">
        <div className="stret">
          <h3>Time of Computation</h3> <h3>33 Seconds</h3>
        </div>
        <div className="stret">
          <h3>Distance Covered</h3> <h3>18.5km</h3>
        </div>
        <div className="stret">
          <h3>Top Speed</h3> <h3>20.4km/hr</h3>
        </div>
        <div className='lins'>
          <Line
            width={90}
            height={300}
            data={{
              labels: ["0.25", "0.5", "0.75", "1", "1.25", "1.5", "hour"],
              datasets: [
                {
                  // yAxisID: "Distance(Kilometres)",
                  label: "Speed (Kilometres/hour)",
                  data: ["10", "15", "13", "20", "19", "21", "km"],
                  backgroundColor: ["rgba(129, 26, 255, 0.01)"],
                  borderColor: ["rgba(255, 255, 255, 0.7)"],
                  pointBackgroundColor: "#811aff",
                  pointBorderColor: "white",
                  showLine: true,
                  borderWidth: 1,
                  // xAxisID: "Time",
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
      </div>
    ),
    uuid: 1,
  },
  {
    heading: <h3 className="heder"> Defensive Contributions</h3>,
    content: (
      <div>
        <div className="stret">
          <h3>Time of Computation</h3> <h3>33 Seconds</h3>
        </div>
        <div className="stret">
          <h3>Distance Covered</h3> <h3>18.5km</h3>
        </div>
        <div className="stret">
          <h3>Top Speed</h3> <h3>20.4km/hr</h3>
        </div>
      </div>
    ),
    uuid: 2,
  },
  {
    heading: <h3 className="heder">Discipline</h3>,
    content: (
      <div>
        <div className="stret">
          <h3>Time of Computation</h3> <h3>33 Seconds</h3>
        </div>
        <div className="stret">
          <h3>Distance Covered</h3> <h3>18.5km</h3>
        </div>
        <div className="stret">
          <h3>Top Speed</h3> <h3>20.4km/hr</h3>
        </div>
      </div>
    ),
    uuid: 3,
  },
  {
    heading: <h3 className="heder">Attacking Contributions</h3>,
    content: (
      <div>
        <div className="stret">
          <h3>Time of Computation</h3> <h3>33 Seconds</h3>
        </div>
        <div className="stret">
          <h3>Distance Covered</h3> <h3>18.5km</h3>
        </div>
        <div className="stret">
          <h3>Top Speed</h3> <h3>20.4km/hr</h3>
        </div>
      </div>
    ),
    uuid: 4,
  },
];

export default items;
