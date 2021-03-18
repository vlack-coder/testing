import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";
import "./Accordion.css";
import { Line } from "react-chartjs-2";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#fffff", size: "25px" }}>
      <div className="acdsec">
        <div className="acontain">
          {Data.map((item, index) => {
            return (
              <div className="acb">
                <div 
                  className={clicked ? "acwrap cli" : "acwrap"}
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <h3>{item.question}</h3>
                  <span>
                    {clicked === index ? (
                      <RiArrowUpSLine />
                    ) : (
                      <RiArrowDropDownLine />
                    )}
                  </span>
                </div>
                {clicked === index ? (
                  <div className="acdrop">
                    <div className="tmt">
     
                      <Line
                        width={90}
                        height={300}
                        data={{
                          labels: ["0.25", "0.5", "0.75", "1", "1.25", "1.5", 'hour'],
                          datasets: [
                            {
                              // yAxisID: "Distance(Kilometres)",
                              label: "Speed (Kilometres/hour)",
                              data: ["10", "15", "13", "20", "19", "21", 'km'],
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
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;
