import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { workOrders } from "../utils/data/Data";
import { ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import WorkOrdersTable from "./components/WorkOrdersTable";
import { statuses } from "../utils/data/Data";
import CreateWorkOrder from "./components/CreateWorkOrder";
import WorkOrderSideBar from "./components/WorkOrderSideBar";
import { WorkOrder } from "../utils/types/Types";
import { Doughnut } from "react-chartjs-2";
import QuickLinkCard from "./widgets/QuickLinkCard";

const tempdata = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const WorkOrders: React.FC = ()=>{
  const navigate = useNavigate()
    const [createWorkOrder, setCreateWorkOrder] = useState(false)
    const [availableWorkOrders, setAvailableWorkOrders] = useState<Array<WorkOrder>>()
    const [data, setData] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, backgroundColor: Array<string>, hoverOffset: number}>}>(tempdata)
    const [dataPriority, setDataPriority] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, backgroundColor: Array<string>, hoverOffset: number}>}>(tempdata)
    const [dataCost, setDataCost] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, backgroundColor: Array<string>, hoverOffset: number}>}>(tempdata)

    const onLinkClick = (page: string)=>{
      console.log("Clicked")

      navigate(page);
    }

    useEffect(()=>{
        setAvailableWorkOrders(workOrders)

        const pending = workOrders?.filter((wo: WorkOrder)=>wo.Status.Status=="PENDING").length
        const closed = workOrders?.filter((wo: WorkOrder)=>wo.Status.Status=="CLOSED").length

        const tempdata = {
            labels: [
              'Open Work Orders',
              'Closed Work Orders',
            ],
            datasets: [{
              label: 'Work orders',
              data: [pending, closed],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                // 'rgb(255, 205, 86)'
              ],
              hoverOffset: 2
            }]
          };

        setData(tempdata)

        const priority1 = workOrders?.filter((wo: WorkOrder)=>wo.Device.DevicePriorityState.PriorityCode=="LIFE_SUPPORTING").length
        const priority2 = workOrders?.filter((wo: WorkOrder)=>wo.Device.DevicePriorityState.PriorityCode=="HIGH_RISK").length
        const priority3 = workOrders?.filter((wo: WorkOrder)=>wo.Device.DevicePriorityState.PriorityCode=="NONE_LIFE_SUPPORTING").length

        const tempdatap = {
          labels: [
            'Priority 1',
            'Priority 2',
            'Priority 3',
          ],
          datasets: [{
            label: 'Work orders',
            data: [priority1, priority2, priority3],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(26, 216, 0)',
            ],
            hoverOffset: 4
          }]
        };

        setDataPriority(tempdatap)

        const maintenancewo = workOrders?.filter((wo: WorkOrder)=>wo.WorkOrderType.Type=="MAINTENANCE").reduce((sum, nwo)=>sum + nwo.EstimatedCost, 0)
        const repairswo = workOrders?.filter((wo: WorkOrder)=>wo.WorkOrderType.Type=="REPAIRS").reduce((sum, nwo)=>sum + nwo.EstimatedCost, 0)

        console.log("Maintenance cost is ")
        console.log(maintenancewo)
        console.log("Repairs cost is ")
        console.log(repairswo)

        const tempdatamr = {
          labels: [
            'Maintenance cost',
            'Repair cost',
          ],
          datasets: [{
            label: 'Work orders',
            data: [maintenancewo, repairswo],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(26, 216, 0)',
            ],
            hoverOffset: 4
          }]
        };

        setDataCost(tempdatamr)
    },[])
    
    const handleCreateWOClose = () => setCreateWorkOrder(false);
    const handleCreateWOShow = () => setCreateWorkOrder(true);

    const colors = ['#e74c3c', '#34495e', '#8e44ad']

    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
  <WorkOrderSideBar />
  <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    <div className="container-fluid py-4">
      {/* <Stats /> */}
      <div className="row mt-4">
        <div className="col-lg-12 mb-lg-0 mb-4">
          <div className="card z-index-2 h-100">
            <div className="card-header pb-0 pt-3 bg-transparent">
              <h6 className="text-capitalize">Work Orders overview</h6>
              <p className="text-sm mb-0">
                <i className="fa fa-arrow-up text-success"></i>
                {/* <span className="font-weight-bold">4% more</span> in 2021 */}
              </p>
            </div>
            <div className="card-body p-3">
              <div className="row">
                  <div className="col">
                    <div className="chart">
                      {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas> */}
                      <div className="chart-height-1">
                        <Doughnut data={data} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="chart">
                      {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas> */}
                      <div className="chart-height-1">
                        <Doughnut data={dataPriority} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="chart">
                      {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas> */}
                      <div className="chart-height-1">
                        <Doughnut data={dataCost} />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card z-index-2 h-100">
            <div className="card-header pb-0 pt-3 bg-transparent">
              <h6 className="text-capitalize">Menu</h6>
              <p className="text-sm mb-0">
                {/* <i className="fa fa-arrow-up text-success"></i> */}
                {/* <span className="font-weight-bold">4% more</span> in 2021 */}
              </p>
            </div>
            <div className="card-body p-3">
                <ListGroup variant="flush">
                    <ListGroup.Item action onClick={handleCreateWOShow}>Create Work Order</ListGroup.Item>
                    <ListGroup.Item action><Link to="/clinical-engineering-report">View Faulty Equipment Work Orders</Link></ListGroup.Item>
                    <ListGroup.Item action><Link to="/clinical-engineering-report">View Maintenance Work Orders</Link></ListGroup.Item>
                </ListGroup>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card card-carousel overflow-hidden h-100 p-0">
            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
              <div className="carousel-inner border-radius-lg h-100">
                {
                  workOrders.filter((wo: WorkOrder)=>wo.Status.StatusId != 5).slice(0, 3).map((wo: WorkOrder, i: number)=>{
                    let classname = "carousel-item h-100"
                    i==0 ? classname = "carousel-item h-100 active" : classname = "carousel-item h-100"

                    const random = Math.floor(Math.random() * colors.length)

                    return <div className={classname} style={{ backgroundColor: colors[random],
                      backgroundSize: "cover" }}>
                                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                      <i className="ni ni-camera-compact text-dark opacity-10"></i>
                                    </div>
                                    <h5 className="text-white mb-1">{ wo.Title }</h5>
                                    <p>{ wo.Description }</p>
                                    <p>{ wo.OpenedDate }</p>
                                  </div>
                                </div>
                  })
                }
              </div>
              <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-3">
            <QuickLinkCard title="PPM" icon="flat-color-icons:steam" onClick={()=>onLinkClick('/equipment-library')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="CM" icon="flat-color-icons:reading-ebook" onClick={()=>onLinkClick('/equipment-library')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Unscheduled PPM" icon="skill-icons:workers-light" onClick={()=>onLinkClick('/equipment-library')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Work Order Reports" icon="flat-color-icons:statistics" onClick={()=>onLinkClick('/equipment-library')} />
        </div>
        {/* <div className="col-3">
            <QuickLinkCard title="Preventative Maintenance (PM)" icon="vscode-icons:file-type-config" onClick={()=>onLinkClick('/preventative-maintenance')} />
        </div> */}
      </div>
      
      <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Open Work Orders</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <WorkOrdersTable workOrders={availableWorkOrders} filters={{title: "", limit: 3, statusFilter: statuses[1].Status, typeFilter: "ALL"}} />
            </div>
            <div className="card-footer pb-0" style={{display: 'flex', justifyContent: 'right'}}>
              <small>View More</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Preventative Maintenance Jobs</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <WorkOrdersTable workOrders={availableWorkOrders} filters={{title: "", limit: 3, statusFilter: statuses[1].Status, typeFilter: "MAINTENANCE"}} />
            </div>
            <div className="card-footer pb-0" style={{display: 'flex', justifyContent: 'right'}}>
              <small>View More</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Upcoming Repair Jobs</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <WorkOrdersTable workOrders={availableWorkOrders} filters={{title: "", limit: 3, statusFilter: statuses[1].Status, typeFilter: "REPAIRS"}} />
            </div>
            <div className="card-footer pb-0" style={{display: 'flex', justifyContent: 'right'}}>
              <small>View More</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Closed Work Orders</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <WorkOrdersTable workOrders={availableWorkOrders} filters={{title: "", limit: 3, statusFilter: statuses[4].Status, typeFilter: "ALL"}} />
            </div>
            <div className="card-footer pb-0" style={{display: 'flex', justifyContent: 'right'}}>
              <small>View More</small>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Recently added Equipment</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <EquipmentListTable />
            </div>
          </div>
        </div>
      </div> */}
      <CreateWorkOrder show={createWorkOrder} handleClose={handleCreateWOClose} />
      <Footer />
    </div>
  </main>
    </>
}

export default WorkOrders