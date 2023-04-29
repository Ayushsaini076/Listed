import React, { useState } from "react";
import Chart from "react-apexcharts";
import './Lchart.css'

function Lchart() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "line",
      },
      colors:["#9BDD7C","#E9A0A0"],
      xaxis: {
        categories: [0,"Week 1","Week 2","Week 3","Week 4"],
      },
      yaxis:{
        categories:[0,100,200,300,400,500]
      },
      stroke: {
        curve: 'smooth',
      }
    },
    series: [
      {
        name: "User",
        data: [100,400,150,420,180],
      },
      {
        name:"Guest",
        data:[200,390,200,300,220]
      }
    ],
  });
  return (
    <div className="box">
        <div className="chd">
            <h4>Activities</h4>
            <span>May-June2021</span>
        </div>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="900"
        height="200"
        curve="smooth"
      />
    </div>
  );
}

export default Lchart;
