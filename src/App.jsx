import { useState } from "react";
import "./App.css";
import { EmployeeData } from "./components/EmployeeData";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(EmployeeData);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>firstName</td>
            <td>lName</td>
            <td>profession</td>
            <td> Team</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
