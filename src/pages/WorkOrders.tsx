import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { workOrders } from "../utils/data/Data";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stats from "./components/Stats";
import WorkOrdersTable from "./components/WorkOrdersTable";
import { statuses } from "../utils/data/Data";
import CreateWorkOrder from "./components/CreateWorkOrder";
import WorkOrderSideBar from "./components/WorkOrderSideBar";
import { WorkOrder } from "../utils/types/Types";

const WorkOrders: React.FC = ()=>{
    const [createWorkOrder, setCreateWorkOrder] = useState(false)
    const [availableWorkOrders, setAvailableWorkOrders] = useState<Array<WorkOrder>>()

    useEffect(()=>{
        setAvailableWorkOrders(workOrders)
    },[])
    
    const handleCreateWOClose = () => setCreateWorkOrder(false);
    const handleCreateWOShow = () => setCreateWorkOrder(true);

    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
  <WorkOrderSideBar />
  <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    <div className="container-fluid py-4">
      <Stats />
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
                    <ListGroup.Item action><Link to="/clinical-engineering-report">Update Work Order</Link></ListGroup.Item>
                </ListGroup>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card card-carousel overflow-hidden h-100 p-0">
            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
              <div className="carousel-inner border-radius-lg h-100">
                <div className="carousel-item h-100 active" style={{ backgroundColor: "#e74c3c",
      backgroundSize: "cover" }}>
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-camera-compact text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">Get started with B-Mems</h5>
                    <p>Explore equipment data with detailed information to keep track of performance</p>
                  </div>
                </div>
                <div className="carousel-item h-100" style={{ backgroundColor: "#34495e",
      backgroundSize: "cover"}}>
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-bulb-61 text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">Get started with B-Mems</h5>
                    <p>Explore equipment data with detailed information to keep track of performance</p>
                  </div>
                </div>
                <div className="carousel-item h-100" style={{backgroundColor: "#8e44ad",
      backgroundSize: "cover"}}>
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-trophy text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">Get started with B-Mems</h5>
                    <p>Explore equipment data with detailed information to keep track of performance</p>
                  </div>
                </div>
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