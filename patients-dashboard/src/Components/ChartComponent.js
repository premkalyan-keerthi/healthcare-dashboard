import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js";

const ChartComponent = ({ diagInfo }: props) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // To store the chart instance

  const systolic = diagInfo.diagnosis_history.map(
    (info) => info.blood_pressure.systolic.value
  );
  const diastolic = diagInfo.diagnosis_history.map(
    (info) => info.blood_pressure.diastolic.value
  );

  const months = diagInfo.diagnosis_history
    .map((info) => info.month)
    .filter(function (x, i, a) {
      return a.indexOf(x) === i;
    });

  console.log(months, "test123", diastolic);
  useEffect(() => {
    // Set up the chart only after the component is mounted
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Creating a chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "line", // Type of chart (bar, line, pie, etc.)
      data: {
        labels: months, // Labels for the X-axis
        datasets: [
          {
            label: "Systolic", // Label for the dataset
            data: systolic, // Data for the bars
            borderColor: "#E66FD2",
            backgroundColor: "#E66FD2",
            borderWidth: 1,
          },
          {
            label: "Diastolic", // Label for the dataset
            data: diastolic, // Data for the bars
            borderColor: "#8C6FE6",
            backgroundColor: "#8C6FE6",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Ensures chart is responsive
        scales: {
          y: {
            beginAtZero: true, // Ensure the Y-axis starts at zero
          },
        },
      },
    });

    // Cleanup the chart when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="diagChart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
