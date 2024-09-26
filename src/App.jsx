import { useState } from "react";
import "./App.css";
import { EmployeeData } from "./components/EmployeeData";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(EmployeeData);
  }, []);
  const handleEdit = (id) => {
    alert(id);
  };
  const handleDell = (id) => {
    alert(id);
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Id</td>
            <td>firstName</td>
            <td>lName</td>
            <td>profession</td>
            <td> Team</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lName}</td>
                <td>{item.profession}</td>
                <td>{item.team}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDell(item.id)}
                  >
                    Dell
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
