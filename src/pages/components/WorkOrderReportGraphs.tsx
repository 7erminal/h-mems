import React, { useEffect, useState } from "react";
import { workOrders } from "../../utils/data/Data";
import { Bar, Line } from 'react-chartjs-2';
import { WorkOrder } from "../../utils/types/Types";

const tempdata = {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: [],
      hoverOffset: 0
    }]
  };
  
  const tempdata2 = {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      tension: 0,
      fill: false,
      borderColor: '',
    }]
  };

const WorkOrderReportGraphs: React.FC = ()=>{
    const [barData, setBarData] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, backgroundColor: Array<string>, hoverOffset: number}>}>(tempdata)
  const [lineData, setLineData] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, tension: number, fill: boolean, borderColor: string}>}>(tempdata2)
  
  useEffect(()=>{
    const pm = workOrders?.filter((wo: WorkOrder)=>wo.WorkOrderType.Type=="MAINTENANCE").length
    const co = workOrders?.filter((wo: WorkOrder)=>wo.WorkOrderType.Type=="REPAIRS").length

    const tempdata = {
        labels: [
          'Preventative Maintenance',
          'Corrective Maintenance',
        ],
        datasets: [{
          label: 'Preventative Maintenance vs Corrective Maintenance',
          data: [pm, co],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            // 'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      setBarData(tempdata)

      const tempLinedata = {
        labels: workOrders.map((wo: WorkOrder)=>wo.OpenedDate),
        datasets: [{
          label: 'Work orders per day',
          data: workOrders.map((wo: WorkOrder)=>wo.Cost),
          tension: 4,
          fill: false,
          borderColor: 'rgb(75, 192, 192)'
        }]
      };

      setLineData(tempLinedata)
  },[])

    return <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="card z-index-2 h-100">
                <div className="card-header pb-0 pt-3 bg-transparent">
                  <h6 className="text-capitalize">Work Orders overview</h6>
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
                <div className="card-body p-3">
                  <div className="chart">
                    {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas> */}
                    <Line data={lineData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
}

export default WorkOrderReportGraphs