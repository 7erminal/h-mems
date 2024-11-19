import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import EquipmentSideBar from "./components/EquipmentSideBar";
import NavBar from "./components/NavBar";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Device, WorkOrder } from "../utils/types/Types";
import { workOrders } from "../utils/data/Data";
import WorkOrdersTable from "./components/WorkOrdersTable";
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

type Props = {
    eqDetails: Device | undefined
}

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

const ViewEquipmentDetails: React.FC<Props> = ({eqDetails})=>{
    const [availableWorkOrders, setAvailableWorkOrders] = useState<Array<WorkOrder>>()
    const [data, setData] = useState<{labels: Array<string>, datasets: Array<{label: string, data: Array<number>, backgroundColor: Array<string>, hoverOffset: number}>}>(tempdata)
    useEffect(()=>{
        setAvailableWorkOrders(workOrders)

        const pm = workOrders?.filter((wo: WorkOrder)=>wo.Device.ControlNo==eqDetails?.ControlNo).filter((wo: WorkOrder)=>wo.WorkOrderType.Type=="MAINTENANCE").length
        const co = workOrders?.filter((wo: WorkOrder)=>wo.Device.ControlNo==eqDetails?.ControlNo).filter((wo: WorkOrder)=>wo.WorkOrderType.Type=="REPAIRS").length

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

        setData(tempdata)

    },[])
    
    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
  <EquipmentSideBar />
  <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    <div className="container-fluid py-4">
        <div className="row">
            <div className="col-lg-8 col-md-8">
                <div className="row mt-4">
                    <div className="col-lg-12 mb-lg-0 mb-4">
                    <div className="card z-index-2 h-100">
                        <div className="card-body p-3">
                            <ListGroup horizontal>
                                <ListGroup.Item><span className="text-secondary text-xs font-weight-bold">Control Number</span><br/>{ eqDetails?.ControlNo }</ListGroup.Item>
                                <ListGroup.Item><span className="text-secondary text-xs font-weight-bold">Serial Number</span><br/>{ eqDetails?.SerialNo }</ListGroup.Item>
                                <ListGroup.Item><span className="text-secondary text-xs font-weight-bold">Equipment Class</span><br/>{ eqDetails?.Class }</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12 col-md-12">
                        <div className="card z-index-2 h-100">
                            <div className="card-header pb-0">
                            <h6>Equipment Information</h6>
                            </div>
                            <div className="card-body p-3">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Equipment Type</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.EQType }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">ECRI</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">ECRI Number</p>
                                                <p className="text-xs text-secondary mb-0">{ eqDetails?.ECRINo }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">ECRI Name</p>
                                                <p className="text-xs text-secondary mb-0">{ eqDetails?.ECRIName }</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Model</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Model Number</p>
                                                <p className="text-xs text-secondary mb-0">{ eqDetails?.ModelNumber }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Model Name</p>
                                                <p className="text-xs text-secondary mb-0">{ eqDetails?.ModelName }</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Manufacturer</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.ManufacturedBy }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Supplier</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.SuppliedBy }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">System</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.System }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Purchase Date</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.ModelNumber }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Warranty Expiry Date</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.ModelNumber }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Assigned To</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Department</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.AssignedTo?.Department.Department }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Location</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.AssignedTo?.Department.Department }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Status</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.Status.Status }</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Procedure</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ eqDetails?.ECRIName }</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                        <h6>Equipment History</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                        <WorkOrdersTable workOrders={availableWorkOrders?.filter((wo: WorkOrder)=>wo.Device.ControlNo==eqDetails?.ControlNo)} filters={{limit: 0, statusFilter: "ALL", typeFilter: "ALL", title: ""}} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Graphs and stats part */}
            <div className="col-lg-4 col-md-4">
                <div className="right-sideBar-container">
                    
                </div>
            </div>
        </div>
      <Footer />
    </div>
    <div className="right-sideBar">
        <Container>
            <Row className="mt-4">
                <h3 className="right-sideBar-heading">Equipment History</h3>
            </Row>
            <Row className="mt-3">
                <Col>
                    <b>Preventative vs Corrective</b>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Doughnut data={data} />
                </Col>
            </Row>
        </Container>
    </div>
  </main>
    </>
}

export default ViewEquipmentDetails