import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { PatientsSidePanel } from "./Components/PatientsSidePanel";
import { DiagnosisHistory } from "./Components/DiagnosisHistory";
import ChartComponent from "./Components/ChartComponent";
import Navbar from "./Components/Navbar";
import PatientsInfo from "./Components/PatientsInfo";

function App() {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    //   axios.get()
    let username = "coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`);

    // Authenticate (dummy API)
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        setPatientsData(data);
        console.log(data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <PatientsSidePanel patientsData={patientsData} />
      {patientsData.length && (
        <DiagnosisHistory
          diagInfo={patientsData.find(
            (eachPatient) => eachPatient.name === "Jessica Taylor"
          )}
        />
      )}
      <PatientsInfo patientsData={patientsData}/>
    </div>
  );
}

export default App;
