import React, { useEffect, useState } from "react";
import { equipment } from "../../utils/data/Data";
import { Bar } from 'react-chartjs-2';
import { Device } from "../../utils/types/Types";

const tempdata = {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: [],
      hoverOffset: 0
    }]
  };
  
//   const tempdata2 = {
//     labels: [],
//     datasets: [{
//       label: '',
//       data: [],
//       tension: 0,
//       fill: false,
//       borderColor: '',
//     }]
//   };

const EquipmentReportGraphs: React.FC = ()=>{
    const [barData, setBarData] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, backgroundColor: Array<string>, hoverOffset: number}>}>(tempdata)
    const [barData2, setBarData2] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, backgroundColor: Array<string>, hoverOffset: number}>}>(tempdata)
//   const [lineData, setLineData] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, tension: number, fill: boolean, borderColor: string}>}>(tempdata2)
  
  useEffect(()=>{
    const pm = equipment?.filter((eq: Device)=>eq.Status.Status=="ACTIVE").length
    const co = equipment?.filter((eq: Device)=>eq.Status.Status!="ACTIVE").length

    const tempdata = {
        labels: [
          'Active Equipment',
          'Inactive Equipment',
        ],
        datasets: [{
          label: 'Equipment list',
          data: [pm, co],
          backgroundColor: [
            'rgb(0, 230, 195)',
            'rgb(252, 38, 235)',
            // 'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      setBarData(tempdata)

      const labels = [...new Set(equipment.map(item => item.System))]; 

      const data = []

      for(let c = 0; c<equipment.length; c++){
        const val = equipment.filter(eq=>eq.System==equipment[c].System).length

        data.push(val)
      }

    //   const tempLinedata = {
    //     labels: labels,
    //     datasets: [{
    //       label: 'Equipment by system',
    //       data: data,
    //       tension: 4,
    //       fill: false,
    //       borderColor: 'rgb(75, 192, 192)'
    //     }]
    //   };

    //   setLineData(tempLinedata)
    const tempBardata2 = {
        labels: labels,
        datasets: [{
          label: 'Equipments by system',
          data: data,
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(230, 21, 0)',
            'rgb(3, 90, 252)',
          ],
          hoverOffset: 4
        }]
      };

      setBarData2(tempBardata2)
  },[])

    return <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="card z-index-2 h-100">
                <div className="card-header pb-0 pt-3 bg-transparent">
                  <h6 className="text-capitalize">Equipments</h6>
                  <p className="text-sm mb-0">
                    <i className="fa fa-arrow-up text-success"></i>
                    {/* <span className="font-weight-bold">4% more</span> in 2021 */}
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="chart">
                    {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas> */}
                    <Bar data={barData} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card card-carousel overflow-hidden h-100 p-0">
                <div className="card-header pb-0 pt-3 bg-transparent">
                  <h6 className="text-capitalize">Equipments by system</h6>
                  <p className="text-sm mb-0">
                    <i className="fa fa-arrow-up text-success"></i>
                    {/* <span className="font-weight-bold">4% more</span> in 2021 */}
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="chart">
                    {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas> */}
                    <Bar data={barData2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
}

export default EquipmentReportGraphs