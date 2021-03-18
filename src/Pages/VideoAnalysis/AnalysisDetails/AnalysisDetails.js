import React, { useEffect, useState } from "react";
import "./AnalysisDetails.css";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import axios from "axios";

// export const defaultStyles = {
//   option: (provided, state) => {
//     return {
//       ...provided,
//       color: "white",
//       "&:hover": {
//         background: "red",
//       },
//       background: state.isSelected ? 'red' : ''
//     };
//   },

//   container: (provided, state) => ({
//     ...provided,
//     width: '300px'
//   }),

//   control: (provided, state) => ({
//     ...provided,
//     minHeight: "2rem",
//     // width: "300px",
//     border: "1px solid gray",
//     borderRadius: "0px",
//     backgroundColor: "transparent",
//     color: "#fff",
//   }),

//   menu: (provided, state) => ({
//     ...provided,
//     marginTop: "0px",
//     border: "1px solid #3a3b41",
//     borderRadius: "0px",
//     zIndex: 100,
//     backgroundColor: "#3a3b41",
//   }),
// };

// function AnalysisDetails() {
//   const options = [
//     { value: "chocolate", label: "Premier League" },
//     { value: "strawberry", label: "La Liga" },
//     { value: "vanilla", label: "Seria A" },
//   ];
//   const customStyles = {
//     // menu: (provided, state) => ({
//     //   ...provided,
//     // //   width: state.selectProps.width,
//     // //   borderBottom: "1px dotted pink",
//     // //   color: state.selectProps.menuColor,
//     // //   padding: 20,
//     // }),

//     control: (_, { selectProps: { width } }) => ({
//       width: width,
//     }),
//   };
//   return (
//     <div>
//       <Select
//         options={options}
//         styles={{ ...defaultStyles }}
//         // isMulti={isMulti}
//         required={false}
//         placeholder={'Select League'}
//         // {...otherProps}
//       />
//     </div>
//   );
// }

function AnalysisDetails() {
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
    const data = localStorage.getItem("data");
    console.log("data", data);
    if (data) {
      setTable(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(table));
    console.log("data2", table);
  }, [table]);

  // const res = axios.get(url, {});
  const fetchData = async (e) => {
    e.preventDefault();
    let url = ` https://v3.football.api-sports.io/standings?league=${label1}&season=${label2}`;
    const response = await axios.get(url, {
      headers: {
        //   "Content-Type": "multipart/form-data",
        Accept: "application/json",
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "a9f536a685c2a45e106a33407f705620",
      },
    });
    console.log(response.data.response[0].league.standings);
    setTable(response.data.response[0].league.standings[0]);
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
                <th className="t2" style={{ width: "130px" }}>
                  Team Name
                </th>
                <th className="t3">P</th>
                <th className="t3">W</th>
                <th className="t3">D</th>
                <th className="t3">L</th>
                <th className="t3">F</th>
                <th className="t3">A</th>
                <th className="t3">GD</th>
                <th className="t3">PTS</th>
                {/* ))} */}
              </tr>
            </thead>
          )}
          <tbody>
            {table &&
              table.map((item) => (
                <tr className="ter" key={item.rank}>
                  <td className="t1"> {item.rank} </td>
                  <td className="t2">{item.team.name} </td>
                  <td className="t3"> {item?.all?.played} </td>
                  <td className="t3"> {item?.all?.win} </td>
                  <td className="t3"> {item?.all?.draw} </td>
                  <td className="t3"> {item?.all?.lose} </td>
                  <td className="t3"> {item?.all?.goals.for} </td>
                  <td className="t3"> {item?.all?.goals.against} </td>
                  <td className="t3"> {item?.goalsDiff} </td>
                  <td className="t3"> {item?.points} </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnalysisDetails;
