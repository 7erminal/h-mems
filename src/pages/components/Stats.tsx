import React from "react";
import { workOrders, equipment } from "../../utils/data/Data";
import { Device, WorkOrder } from "../../utils/types/Types";

const Stats: React.FC = ()=>{
    return <div className="row">
    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
      <div className="card">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8">
              <div className="numbers">
                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Equipment</p>
                <h5 className="font-weight-bolder">
                  { equipment.length }
                </h5>
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">{ equipment.filter((eq: Device)=>eq.Status.StatusId==1).length } </span>
                  Healthy, <br/><span className="text-danger text-sm font-weight-bolder">{ equipment.filter((eq: Device)=>eq.Status.StatusId==6).length } </span> Unstable
                </p>
              </div>
            </div>
            <div className="col-4 text-end">
              <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
      <div className="card">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8">
              <div className="numbers">
                <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Work Orders</p>
                <h5 className="font-weight-bolder">
                  { workOrders.length }
                </h5>
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">{ workOrders.filter((wo: WorkOrder)=>wo.Status.StatusId==5).length } </span>
                  Closed, <br/><span className="text-danger text-sm font-weight-bolder">{ workOrders.filter((wo: WorkOrder)=>wo.Status.StatusId==2).length } </span> Open
                </p>
              </div>
            </div>
            <div className="col-4 text-end">
              <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
      <div className="card">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8">
              <div className="numbers">
                <p className="text-sm mb-0 text-uppercase font-weight-bold">Damaged Equipment</p>
                <h5 className="font-weight-bolder">
                  { equipment.filter((eq: Device)=>eq.Status.StatusId==7).length }
                </h5>
                <p className="mb-0">
                  {/* <span className="text-danger text-sm font-weight-bolder">+12% </span> */}
                  These equipment need replacement
                </p>
              </div>
            </div>
            <div className="col-4 text-end">
              <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-sm-6">
      <div className="card">
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8">
              <div className="numbers">
                <p className="text-sm mb-0 text-uppercase font-weight-bold">Near half life</p>
                <h5 className="font-weight-bolder">
                  0
                </h5>
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">Equipment</span> near half life
                </p>
              </div>
            </div>
            <div className="col-4 text-end">
              <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Stats