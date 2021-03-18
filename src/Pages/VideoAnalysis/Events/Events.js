import React, { useEffect, useState } from "react";
import "./Events.css";
import axios from "axios";

function Events() {
  const [label1, setInputlabel1] = useState("39");
  const [label2, setInputlabel2] = useState("2017");
  // const [item, setitem] = useState([]);
  const [table, setTable] = useState([]);

  const selectHandler1 = (e) => {
    setInputlabel1(e.target.value);
  };
  console.log(label1);
  const selectHandler2 = (e) => {
    setInputlabel2(e.target.value);
  };
  useEffect(() => {
    const data = localStorage.getItem("data1");
    console.log("data", data);
    if (data) {
      setTable(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data1", JSON.stringify(table));
    console.log("data2", table);
  }, [table]);

  // const res = axios.get(url, {});
  const fetchData = async (e) => {
    e.preventDefault();
    let url = ` https://v3.football.api-sports.io/players/topscorers?season=${label2}&league=${label1}`;
    const response = await axios.get(url, {
      headers: {
        //   "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "a9f536a685c2a45e106a33407f705620",
      },
    });
    console.log("res", response.data.response);
    setTable(response.data.response);
    // setTable(response.data);
  };
  console.log(Array.isArray(table));
  console.log(table.length);
  console.log(table);
  return (
    <div>
      <form onSubmit={fetchData}>
        <div className="seles">
          <div className="seli">
            <select
              style={{ padding: "5px 12px" }}
              name="league"
              value={label1}
              id=""
              onChange={selectHandler1}
            >
              <option value="39">Premier League</option>
              <option value="135">Serie A</option>
              <option value="140">LaLiga</option>
            </select>
          </div>
          <div className="seli1">
            <select
              style={{ width: "100%", padding: "5px 12px" }}
              name="year"
              value={label2}
              id=""
              onChange={selectHandler2}
            >
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
          </div>
          <input type="submit" className="isub" value="submit" />
        </div>
      </form>
      <div className="stable">
        <table className="table" cellPadding={0} cellSpacing={0}>
          {table.length > 0 && (
            <thead className="tr">
              <tr className="tr">
                {/* {columns.map((heading) => ( */}
                <th className="t1">#</th>
                <th className="t2" style={{ width: "50px" }}>
                  Player Name
                </th>
                <th className="t3" style={{ textAlign: 'left' }}>Club</th>
                <th className="t3">Goals</th>
                <th className="t3">Assists</th>
              </tr>
            </thead>
          )}
          <tbody>
            {table &&
              table.map((item) => {
                let i = 0;
                i = i + 1;
                return (
                  <tr className="ter" key={item.rank}>
                    <td className="t3"> {i} </td>
                    <td className="t2"> {item?.player.name} </td>
                    <td className="t2"> {item?.statistics[0]?.team?.name} </td>
                    <td className="t3">{item?.statistics[0]?.goals?.total}</td>
                    <td className="t3">
                      {item?.statistics[0]?.goals?.assists}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Events;
