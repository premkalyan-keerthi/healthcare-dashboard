import React from "react";
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import ChartComponent from "./ChartComponent";

export const DiagnosisHistory = ({diagInfo}:props) => {
    // const chart = new Chart(ctx, {
    //     type: 'line',
    //     data: data,
    //     options: {
    //       onClick: (e) => {
    //         const canvasPosition = getRelativePosition(e, chart);
      
    //         // Substitute the appropriate scale IDs
    //         const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
    //         const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
    //       }
    //     }
    //   });
 
      
  return (
    <div className="diagBlock">
      <h2 className="cardName">Diagnosis History</h2>
      <ChartComponent
        diagInfo={diagInfo}
      />
    <div className="highlightCardsBlock">
    <div className="highlightCard respiratoryColor">
        <img className="highlightImg" src="/images/respiratory_rate.png" />
        <span>Respiratory Rate</span>
        <h2 className="cardName">20 bpm</h2>        
        <span className="normalText">Normal</span>
    </div>
    <div className="highlightCard respiratoryColor2">
        <img className="highlightImg" src="/images/temperature.png" />
        <span>Temperature</span>
        <h2 className="cardName">98.6°F</h2>        
        <span className="normalText">Normal</span>
    </div>
    <div className="highlightCard respiratoryColor3">
        <img className="highlightImg" src="/images/HeartBPM.png" />
        <span>Heart Rate</span>
        <h2 className="cardName">78 bpm</h2>        
        <span className="normalText">Normal</span>
    </div>
    </div>
    </div>
  );
};
